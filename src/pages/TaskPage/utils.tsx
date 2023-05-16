import Latex from 'react-latex';
import cn from 'classnames/bind';
import styles from './components/Solving/styles.module.scss';

import { UiInput } from '@/ui-components/UiInput';
import { isJsonString } from '@/utils/others';

enum InputTaskPositions {
  sub = 'sub',
  sup = 'sup',
  center = 'center',
}

interface ITaskInput {
  id: string;
  position: InputTaskPositions;
  hint: string;
}

export interface IInputTaskStateObject {
  position: InputTaskPositions;
  id: string;
  hint: string;
  isError: boolean;
  isCorrect: boolean;
}

const isObjectInputType = (object: Record<string, any>) => {
  if (typeof object !== 'object') return false;
  return (
    typeof object?.id === 'string' &&
    typeof object?.position &&
    typeof object?.hint === 'string'
  );
};
export const divideLatexAndInputs = (response: string) => {
  const objectInputs: ITaskInput[] = [];
  const finalResult: (string | ITaskInput)[] = [];
  response
    .split('<question>')
    .filter(Boolean)
    .forEach((elem) => {
      if (isJsonString(elem) && isObjectInputType(JSON.parse(elem))) {
        const targetObject = JSON.parse(elem);
        objectInputs.push(targetObject);
        finalResult.push(targetObject);
      } else finalResult.push(elem);
    });

  return { objectInputs, finalResult };
};

const cx = cn.bind(styles);
export const createInputsState = (
  inputObjectsIncoming: ITaskInput[],
): Record<string, IInputTaskStateObject> =>
  inputObjectsIncoming.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.id]: {
        ...currentValue,
        isError: false,
        isCorrect: false,
      },
    }),
    {} as Record<string, IInputTaskStateObject>,
  );

export const convertStringToLatexAndInput = (
  elemsToMap: (string | ITaskInput)[],
  state: Record<string, IInputTaskStateObject>,
  handleInputChange: (id: string, value: string) => void,
) => {
  const result: any[] = [];
  elemsToMap.forEach((elem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    typeof elem === 'string'
      ? result.push(<Latex>{`$${elem}$`}</Latex>)
      : result.push(
          <UiInput
            id={elem.id}
            isError={state[elem.id].isError}
            onChange={(event) =>
              handleInputChange(event.target.id, event.target.value)
            }
            className={cx(
              styles.Solving__input,
              styles[`Solving__input_${elem.position}`],
            )}
          />,
        );
  });

  return result;
};
