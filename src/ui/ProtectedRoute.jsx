import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();
  //3 if there is no authenticated user .r,redirect it to the/login
  //useNavigate can only be used at callback and useEffect
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading]
  );
  const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  // 1 Load the authenticated user

  // 2 while loading show the spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4 if there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
