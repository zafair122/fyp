import React, { Component } from "react";
import { Container, Box, Button } from "@material-ui/core";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

class ManageProductFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Index", field: "index", type: "numeric" },
        { title: "Product", field: "productName" },
        { title: "Price", field: "price", type: "numeric" },
        { title: "Description", field: "productDesc" },
        {
          title: "Image",
          field: "imageUrl",
          editComponent: (props) => (
            <>
              <input
                accept="image/*"
                id="contained-button-file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    this.setState({
                      image: e.target.files[0],
                    });
                    e.target.value = null;
                  }
                }}
                hidden
                name="images"
                type="file"
              />
              <label htmlFor="contained-button-file">
                {this.state.image ? (
                  <img
                    src={this.renderImageUrl(this.state.image)}
                    style={{ width: 50, borderRadius: "10%" }}
                  />
                ) : (
                  <Button variant="contained" color="primary" component="span">
                    Add Image
                  </Button>
                )}
              </label>
            </>
          ),
          render: (rowData) => (
            <img
              src={rowData.imageUrl}
              style={{ width: 50, borderRadius: "10%" }}
            />
          ),
        },
      ],
      data: [
        {
          index: "1",
          productName: "Pizza",
          price: "RS : 1000",
          productDesc: "Description",
          imageUrl:
            "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
        },
        {
          index: "2",
          productName: "Salad",
          price: "RS : 100",
          productDesc: "Description",
          imageUrl:
            "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
        },
      ],
    };
  }

  renderImageUrl = (item) => {
    try {
      return URL.createObjectURL(item);
    } catch (error) {
      return item;
    }
  };

  render() {
    return (
      <div>
        <Container maxWidth="md" fixed>
          <MaterialTable
            icons={tableIcons}
            title="PRODUCTS"
            columns={this.state.columns}
            data={this.state.data}
            editable={{
              // onRowAdd: (newData) =>
              //   new Promise((resolve) => {
              //     if (
              //       newData.name &&
              //       newData.categoryName &&
              //       newData.imageUrl
              //     ) {
              //       setTimeout(() => {
              //         resolve();
              //         this.setState((prevState) => {
              //           const data = [...prevState.data];
              //           data.push(newData);
              //           return { ...prevState, data };
              //         });
              //       }, 600);
              //     } else {
              //       resolve();
              //       this.setState({
              //         image: null,
              //       });
              //     }
              //   }),
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      this.setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </Container>
      </div>
    );
  }
}

export default ManageProductFragment;
