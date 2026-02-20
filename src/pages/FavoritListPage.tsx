import React, { memo, useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { observer } from "mobx-react-lite";

import { favorite } from "../store/favoritStore.ts";
export const FavoritListPage = observer(
  ({ favoriteContactsState, contactsState }) => {
    const [contacts, setContacts] = useState<ContactDto[]>([]);
    useEffect(() => {
      setContacts(() =>
        contactsState.filter(({ id }) => favoriteContactsState.includes(id)),
      );
    }, [contactsState, favoriteContactsState]);
    return (
      <Row xxl={4} className="g-4">
        {favorite.map((f) => (
          <Col key={f.id}>
            <ContactCard contact={f} withLink />
          </Col>
        ))}
      </Row>
    );
  },
);
