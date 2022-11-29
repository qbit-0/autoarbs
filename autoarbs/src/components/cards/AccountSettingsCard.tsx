type Props = {};

const AccountSettingsCard = (props: Props) => {
  return (
    <div className="card hoverable">
      <form>
        <div className="card-content">
          <div className="card-title">Settings</div>
          <div className="input-field">
            <select title="Example Setting" value="1">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Example Setting</label>
          </div>
        </div>
        <div className="card-action">
          <div className="flex justify-end">
            <button className="btn waves-effect waves-light" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsCard;
