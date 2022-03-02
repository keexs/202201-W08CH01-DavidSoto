import Link from "next/link";
import styled from "styled-components";

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  list-style: none;
  margin-top: 20px;
  padding: 0px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px inset;

  a:hover {
    text-shadow: rgba(0, 0, 0, 0.12) 0px 1px 2px,
      rgba(0, 0, 0, 0.24) 0px 1px 2px;
    top: 3px;
  }
`;

const NavBar = () => {
  return (
    <>
      <NavMenu>
        <li>
          <Link href={"/"} passHref>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/pokemonISR"}>
            <a>Pokemon List</a>
          </Link>
        </li>
        <li>
          <Link href={"/pokemonISR"}>
            <a>Pokemon SSG</a>
          </Link>
        </li>
        <li>
          <Link href={"/pokemonISR"}>
            <a>Pokemon SSR</a>
          </Link>
        </li>
        <li>
          <Link href={"/pokemonISR"}>
            <a>Pokemon IRS</a>
          </Link>
        </li>
      </NavMenu>
    </>
  );
};

export default NavBar;
