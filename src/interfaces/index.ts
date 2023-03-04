import type { FormEvent, MouseEvent } from 'react';

export interface eventPropsIF {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
