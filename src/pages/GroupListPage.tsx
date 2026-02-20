import React, { memo, useEffect } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { observer } from "mobx-react-lite";
import { useStore } from "src/store/RootStore";

export const GroupListPage = observer(() => {
  const { groups } = useStore();

  useEffect(() => {
    groups.getGroups();
  }, []);
  return (
    <Row xxl={4}>
      {groups.groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
