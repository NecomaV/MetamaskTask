import React, { useState, Fragment } from "react";
import Registration from "./Registration";
import Table from "./Table";

interface FormData {
  name: string;
  email: string;
  profile: string;
  formErrors: Partial<FormData>;
}

function Profile() {
  const [tableData, setTableData] = useState<FormData[]>([]);
  const [formObject, setFormObject] = useState<FormData>({
    name: "",
    email: "",
    profile: "",
    formErrors: {},
  });

  const onValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = { ...formObject, [event.target.name]: event.target.value };
    setFormObject(value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = [...tableData, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", email: "", profile: "", formErrors: {} };
      setFormObject(isEmpty);
    } else {
      const formErrors = {
        name: !formObject.name ? "Name is required" : "",
        email: !formObject.email ? "Email is required" : "",
        profile: !formObject.profile ? "Profile is required" : "",
      };
      setFormObject({ ...formObject, formErrors });
    }
  };

  return (
    <Fragment>
        <div className="cont_regis">
            <Registration
            onValChange={onValChange}
            formObject={formObject}
            onFormSubmit={onFormSubmit}
            formErrors={formObject.formErrors}
            />
            <Table tableData={tableData} />
        </div>
    </Fragment>
  );
}

export default Profile;
