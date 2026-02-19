import React from "react";
import "./MainApp.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "src/components/Layout";
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from "src/pages";
import { useGetContactsQuery, useGetGroupsQuery } from "../../services/api";

export const MainApp = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const { data: groups = [] } = useGetGroupsQuery();
  const favoriteContactsState = useSelector(
    (state: any) => state.favorite?.items || [],
  );

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ContactListPage
                  contactsState={contacts}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groups}
                />
              }
            />
            <Route path="contact">
              <Route
                index
                element={
                  <ContactListPage
                    contactsState={contacts}
                    favoriteContactsState={favoriteContactsState}
                    groupContactsState={groups}
                  />
                }
              />
              <Route
                path=":contactId"
                element={
                  <ContactPage
                    contactsState={contacts}
                    favoriteContactsState={favoriteContactsState}
                    groupContactsState={groups}
                  />
                }
              />
            </Route>
            <Route path="groups">
              <Route
                index
                element={
                  <GroupListPage
                    contactsState={contacts}
                    favoriteContactsState={favoriteContactsState}
                    groupContactsState={groups}
                  />
                }
              />
              <Route
                path=":groupId"
                element={
                  <GroupPage
                    contactsState={contacts}
                    favoriteContactsState={favoriteContactsState}
                    groupContactsState={groups}
                  />
                }
              />
            </Route>
            <Route
              path="favorit"
              element={
                <FavoritListPage
                  contactsState={contacts}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groups}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
