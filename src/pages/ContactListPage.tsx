import { useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import { observer } from "mobx-react-lite";
import { useStore } from "src/store/RootStore";

export const ContactListPage = observer(() => {
  const { contacts, groups } = useStore();

  const [filteredContacts, setFilteredContacts] = useState(contacts.contacts);

  useEffect(() => {
    contacts.getContacts();
    groups.getGroups();
  }, []);
  useEffect(() => {
    setFilteredContacts(contacts.contacts);
  }, [contacts.contacts]);
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts.contacts;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1,
      );
    }

    if (fv.groupId) {
      const groupContacts = groups.groups.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id),
        );
      }
    }

    setFilteredContacts(findContacts);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groups.groups}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
