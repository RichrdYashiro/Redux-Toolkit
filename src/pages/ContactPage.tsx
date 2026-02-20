import React, { FC, useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { observer } from "mobx-react-lite";
import { Empty } from "src/components/Empty";
import { useStore } from "src/store/RootStore";

export const ContactPage = observer(() => {
  const { contacts, groups } = useStore();

  const { contactId } = useParams<{ contactId: string }>();
  useEffect(() => {
    contacts.getContacts();
  }, []);
  const contact = contacts.contacts.find(({ id }) => id === contactId);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
});
