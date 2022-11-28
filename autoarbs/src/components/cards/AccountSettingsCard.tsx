import { useEffect, useRef } from "react";

type Props = {};

const AccountSettingsCard = (props: Props) => {
  const exampleSelectRef = useRef(null);

  useEffect(() => {
    if (exampleSelectRef.current) M.FormSelect.init(exampleSelectRef.current);
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">Settings</div>
        <div className="input-field">
          <select ref={exampleSelectRef} title="Example Setting" value="1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Example Setting</label>
        </div>
      </div>
      <div className="card-action">
        <div className="flex justify-end">
          <button className="btn waves-effect waves-light">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsCard;
