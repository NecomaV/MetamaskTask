import React, { ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  profile: string;
}

interface RegistrationProps {
  onValChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formObject: FormData;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  formErrors: Partial<FormData>;
}

const Registration: React.FC<RegistrationProps> = ({ onValChange, formObject, onFormSubmit, formErrors }) => {
  return (
    <div>
      <div className="cont">
        <div className="cont__content">
          <h3>BETA TEST REGISTRATION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="cont__registr">
          <form action="" method="post" onSubmit={onFormSubmit}>
            <div className="cont__regist_name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name='name'
                placeholder='We will display your name in participation list '
                onChange={onValChange}
                value={formObject.name}
                
              />
              {formErrors.name && <span>{formErrors.name}</span>}
            </div>
            <div className="cont__regist_email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name='email'
                placeholder='We will display your email in participation list '
                onChange={onValChange}
                value={formObject.email}
                
              />
              {formErrors.email && <span>{formErrors.email}</span>}
            </div>
            <button type='submit'>GET EARLY ACCESS</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration;
