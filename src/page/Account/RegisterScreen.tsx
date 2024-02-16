import { useRegisterMutation } from "@/api/account/register";
import { RegisterRequest } from "@/type/account/registerType";
import useAlertStore from "@/zustand/alert";
import { Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const RegisterScreen = () => {
  const naviagte = useNavigate();
  const { setAlert, clearAlert } = useAlertStore();

  const onSuccess = useCallback(() => {
    naviagte("/account/login", { replace: true });
    clearAlert();
  }, [clearAlert, naviagte]);

  const { mutate } = useRegisterMutation(onSuccess);

  const handleSubmit = useCallback(
    (value: RegisterRequest) => {
      setAlert({
        open: true,
        message: "Sure to register?",
        onOk: () => {
          mutate(value);
          clearAlert();
        },
      });
    },
    [mutate, clearAlert]
  );

  return (
    <Stack alignItems="center">
      <h1>Rehister</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Field
              as={TextField}
              name="name"
              label="name"
              variant="outlined"
              fullWidth
              error={!!formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              error={!!formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              error={!!formik.touched.password && !!formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default RegisterScreen;
