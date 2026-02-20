import React, { memo, useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { observer } from "mobx-react-lite";

import { useStore } from "src/store/RootStore";

export const FavoritListPage = observer(() => {
  const { contacts, favorites } = useStore();

  useEffect(() => {
    contacts.getContacts();
  }, []);

  const favoriteList = contacts.contacts.filter((c) =>
    favorites.favorites.includes(c.id),
  );

  return (
    <Row xxl={4} className="g-4">
      {favoriteList.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
