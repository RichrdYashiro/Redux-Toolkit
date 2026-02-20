import React, { useEffect } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { observer } from "mobx-react-lite";
import { useStore } from "src/store/RootStore";

export const GroupPage = observer(() => {
  const { contacts, groups } = useStore();

  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    contacts.getContacts();
    groups.getGroups();
  }, []);
  const group = groups.groups.find(({ id }) => id === groupId);
  const groupMembers = contacts.contacts.filter((contact) =>
    group?.contactIds.includes(contact.id),
  );

  return (
    <Row className="g-4">
      {group ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={group} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {groupMembers.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
