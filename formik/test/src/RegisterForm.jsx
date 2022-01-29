import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  friends: [
    {
      name: "dfgdfgfdgfdf",
      email: "ffff@hhhh.bbb",
    },
  ],
};

const RegisterForm = () => (
  <div>
    <h1>Invite friends</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FieldArray name="friends">
            {({ insert, remove, push }) => (
              <div>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`friends.${index}.name`}>Name</label>
                        <input
                          name={`friends.${index}.name`}
                          placeholder="Jane Doe"
                          type="text"
                          onChange={(e) =>
                            setFieldValue(
                              `friends.${index}.name`,
                              e.target.value
                            )
                          }
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`friends.${index}.email`}>Email</label>
                        <input
                          name={`friends.${index}.email`}
                          placeholder="jane@acme.com"
                          type="email"
                          onChange={(e) =>
                            setFieldValue(
                              `friends.${index}.email`,
                              e.target.value
                            )
                          }
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: "", email: "" })}
                >
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Invite</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;
