import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Table from "../../Components/Table";
import Styled from "./style";

const Users = (parentProps) => {
  const { fetchUsers, users } = parentProps;

  useEffect(() => {
    fetchUsers({});
  }, []);

  return (
    <Styled.Wrapper>
      <h1>User</h1>
      <div></div>
      <Table
        columns={[
          { id: "fullName", label: "First Name" },
          { id: "email", label: "Email" },
          { id: "cell", label: "Cell" },
        ]}
        data={users}
      />
    </Styled.Wrapper>
  );
};

const mapState = (state) => {
  return {
    apiStatus: state.asyncRequests,
    users: state.users.list,
    filters: state.filters,
    logBook: state.logBook,
  };
};
const mapDispatch = (dispatch) => {
  return {
    fetchUsers: (data) => dispatch.users.fetchData(data),
  };
};

export default connect(mapState, mapDispatch)(Users);

Users.propTypes = {
  users: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};
