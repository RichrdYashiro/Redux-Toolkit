import { GroupContactsDto } from './../types/dto/GroupContactsDto';
import { ContactDto } from './../types/dto/ContactDto';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1/' }),
  endpoints: (build) => ({
    getContacts: build.query<ContactDto[], void>({
      query: () => '96b46f3d-e1a2-4648-88b7-4b47d44652d5',
    }),
    getGroups: build.query<GroupContactsDto[], void>({
      query: () => '03859bbe-a18d-4ec9-86c4-96bb07d37341',
    }),
  }),
});

export const { useGetContactsQuery, useGetGroupsQuery } = apiSlice;