import React from "react";
import "./MainApp.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "src/components/Layout";

import { observer } from "mobx-react-lite";

export const MainApp = () => {
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
