import React from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import { Nav, NavDropdown, Navbar, Form } from "react-bootstrap";
import ErrorPage from "./ErrorPage";

class NavBar extends React.Component {
  state = { topics: [], isLoading: true, hasError: null };

  componentDidMount() {
    api
      .getTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false }, () => {});
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({
          hasError: { status, msg: data.msg },
          isLoading: false,
        });
      });
  }

  render() {
    const { topics, isLoading, hasError } = this.state;
    if (isLoading) return <Loader />;
    if (hasError)
      return <ErrorPage status={hasError.status} msg={hasError.msg} />;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/articles">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              {topics.map(({ slug }) => {
                return (
                  <>
                    <NavDropdown.Item href={`/topics/${slug}`}>
                      {slug}
                    </NavDropdown.Item>
                  </>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <medium style={{ color: "Black" }}>
            Signed In As: {this.props.username}
          </medium>
        </Form>
      </Navbar>
    );
  }
}

export default NavBar;

{
  /* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button> */
}
