import {
  displaySuccessToast,
  displayWarningToast,
} from '../components/Constants';

export function increment() {
  displaySuccessToast('MY SUCCESS');
  return {
    type: 'INCREMENT',
  };
}

export function decrement() {
  displayWarningToast('DECREASE');
  return {
    type: 'DECREMENT',
  };
}

export function reset() {
  return {
    type: 'RESET',
  };
}
