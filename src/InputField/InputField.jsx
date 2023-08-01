export const InputField = ({
  label,
  placeholder,
  type,
  name,
  rules,
  formContext,
}) => {
  const {
    register,
    formState: { errors },
  } = formContext;
  const error = errors?.[name];

  return (
    <label>
      {label}
      <input placeholder={placeholder} type={type} {...register(name, rules)} />
      {error && <span>{error.message || "Error"}</span>}
    </label>
  );
};
