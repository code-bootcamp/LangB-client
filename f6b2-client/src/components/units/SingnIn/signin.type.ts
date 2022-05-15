import { FormEvent } from 'react';


export interface ISingninPresenter {
  onClickSignin: (event: FormEvent<HTMLFormElement>) => void;
  register: any;
  handleSubmit: Function;
  formState: any;

}
