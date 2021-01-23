import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { RouteComponentProps } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { AppState } from "../store/reducer";

import { useSelector, useDispatch } from "react-redux";
import { removeCustomer } from "../store/actions/customer";
import { CustomerModel } from "../model/customer";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface CustomerComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const Customer: React.FC<CustomerComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleDelete = (id: string) => {
    dispatch(removeCustomer(id));
  };
  const handleAdd = () => {
    history.push("/add");
  };
  const handleEdit = (id: string) => {
    history.push(`/edit/${id}`);
  };

  const customers: CustomerModel[] = useSelector(
    (state: AppState) => state.customer.customers
  );

  return (
    <Card>
      <CardContent>
        <Button variant="outlined" color="primary" onClick={() => handleAdd()}>
          Add Customer
        </Button>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Skills</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((row: CustomerModel) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.firstname}
                  </TableCell>
                  <TableCell>{row.lastname}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.skill.toString()}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(row.id)}
                    >
                      EDIT
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleDelete(row.id)}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Customer;
