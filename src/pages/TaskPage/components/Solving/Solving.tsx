import React, { useState } from 'react';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

import { SectionContentWrapper } from '@/components/SectionContentWrapper';
import {
  convertStringToLatexAndInput,
  createInputsState,
  divideLatexAndInputs,
  IInputTaskStateObject,
} from '@/pages/TaskPage/utils';
import { UIButton } from '@/ui-components/UIButton';
import { UITag } from '@/ui-components/UITag';

const cx = cn.bind(styles);

enum InputTaskPositions {
  sub = 'sub',
  sup = 'sup',
  center = 'center',
}

interface IInputTaskInstate {
  position: InputTaskPositions;
  id: string;
  hint: string;
  isError: boolean;
  isCorrect: boolean;
}

export const Solving = () => {
  const response =
    '$A_8^3*C$<question>{ "id": "1x;l,m23", "position": "sub", "hint": "some hint"}<question>$^{20}$';
  const { finalResult, objectInputs } = divideLatexAndInputs(response);
  const [inputsState, setInputState] = useState<
    Record<string, IInputTaskStateObject>
  >(createInputsState(objectInputs));

  const handleInputChange = (id: string, value: string) => {
    console.log('some thing', id, value);
  };
  console.log('latexText', finalResult, 'objectInputs', objectInputs);

  const toMap = convertStringToLatexAndInput(
    finalResult,
    inputsState,
    handleInputChange,
  );

  return (
    <section className={cx(styles.Solving)}>
      <div className={cx(styles.Solving__header)}>
        <div className={cx(styles.Solving__mainTextWithError)}>
          <div className={cx(styles.Solving__mainText)}>Решение</div>
          <div className={cx(styles.Solving__errors)}>2 ошибки</div>
          <UITag text="НИУ ВШЭ НН" />
          <UITag text="НИУ ВШЭ НР" />
        </div>

        <div className={cx(styles.Solving__actions)}>
          <UIButton className={cx(styles.Solving__actionButton)}>
            Отправить на проверку
          </UIButton>
          <UIButton className={cx(styles.Solving__actionButton)}>
            Получить подсказку
          </UIButton>
        </div>
      </div>

      <SectionContentWrapper>
        <div className={cx(styles.Solving__task)}>
          {toMap.map((elem) => elem)}
        </div>
      </SectionContentWrapper>
    </section>
  );
};
