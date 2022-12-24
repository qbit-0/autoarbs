import {
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

type Props = {};

const AccountSettingsCard = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">Settings</Typography>
        <TextField id="sample" name="sample" label="Sample" fullWidth select>
          <MenuItem value="0">Option 0</MenuItem>
          <MenuItem value="1">Option 1</MenuItem>
          <MenuItem value="2">Option 2</MenuItem>
        </TextField>
      </CardContent>
    </Card>
  );
};

export default AccountSettingsCard;
