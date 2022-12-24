import { Card, CardContent, MenuItem, Select, Typography } from "@mui/material";

type Props = {};

const AccountSettingsCard = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h1">Settings</Typography>
        <Select value="0" label="Sample Setting">
          <MenuItem value="0">Option 0</MenuItem>
          <MenuItem value="1">Option 1</MenuItem>
          <MenuItem value="2">Option 2</MenuItem>
        </Select>
      </CardContent>
    </Card>
  );
};

export default AccountSettingsCard;
