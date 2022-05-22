import { Paper, Typography } from '@material-ui/core'

import PasswordChecklist from 'react-password-checklist'

const Password = ({ password, setValidPass }) => {
  return (
    <>
      <Paper style={{ padding: 10, margin: '10px 0' }}>
        <Typography>Your password must contain: </Typography>
        <PasswordChecklist
          rules={['minLength', 'specialChar', 'number', 'capital']}
          minLength={8}
          value={password}
          onChange={(isValid) => setValidPass(isValid)}
        />
      </Paper>
    </>
  )
}

export default Password
