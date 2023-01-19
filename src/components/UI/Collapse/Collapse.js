import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import icon from './chevron-thin-down.svg';
import styles from './Collapse.module.scss';

const Collapse = props => {
  const [visible, setVisible] = useState(false);
  const [rotated, setRotated] = useState(false);

  const stateHandler = () => {
    setVisible(prevState => !prevState);
    setRotated(prevState => !prevState);
  };

  const iconRef = useRef(null);
  const collapseRef = useRef(null);

  return (
    <div className={styles.collapse}>
      <div className={styles['collapse__header']}>
        <h2 className={styles['collapse__title']}>
          <button className={styles['collapse__button']} onClick={stateHandler}>
            {props.title}
          </button>
        </h2>
        <CSSTransition
          nodeRef={iconRef}
          in={rotated}
          timeout={300}
          classNames={{
            enter: styles['collapse__icon-enter'],
            enterActive: styles['collapse__icon-enter-active'],
            enterDone: styles['collapse__icon-enter-done'],
            exit: styles['collapse__icon-exit'],
            exitActive: styles['collapse__icon-exit-active'],
            exitDone: styles['collapse__icon-exit-done'],
          }}
        >
          <img
            className={styles['collapse__icon']}
            src={icon}
            alt="icon"
            ref={iconRef}
          />
        </CSSTransition>
      </div>
      <CSSTransition
        nodeRef={collapseRef}
        in={visible}
        timeout={300}
        classNames={{
          enter: styles['collapse__content-enter'],
          enterActive: styles['collapse__content-enter-active'],
          enterDone: styles['collapse__content-enter-done'],
          exit: styles['collapse__content-exit'],
          exitActive: styles['collapse__content-exit-active'],
          exitDone: styles['collapse__content-exit-done'],
        }}
        mountOnEnter
        unmountOnExit
      >
        <div ref={collapseRef} className={styles['collapse__content']}>
          <p className={styles['collapse__paragraph']}>{props.content}</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Collapse;
