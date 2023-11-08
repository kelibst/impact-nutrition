'use client'
import { EventFormProps } from "@/components/Dashboard/DashboardEvent/AddEventForm";
import { Event } from "@prisma/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEvents = createAsyncThunk( "events/getEvents", async (data, thunkApi) => {
    let headersList = {
        Accept: "*/*",
    };

    let reqOptions = {
        url: `/api/events`,
        method: "GET",
        headers: headersList,
    };
    try {
        let response = await axios.request(reqOptions);
        return response.data;
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
    } 
) 

export const addEventAttendee = createAsyncThunk('events/addEventAttendee',  async (eventId: string) => {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    eventId,
  });
  const response = await axios.post(`/api/events/attend`, body, {
    headers,
  });
  return response.data;
}
)

const addEventPayment = async (
  eventId: string,
  userId: string,
  amount: number,
  paid: boolean,
  receipt: string
) => {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    eventId,
    amount,
    userId,
    paid,
    receipt,
  });
  const response = await axios.post(`/api/events/attend/payments`, body, {
    headers,
  });
  return response.data;
};

const deleteEvent = async (id: string) => {
  const headersList = {
    Accept: "*/*",
  };

  const reqOptions = {
    url: `/api/events?id=${id}`,
    method: "DELETE",
    headers: headersList,
  };

  try {
    const response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async ({
  id,
  title,
  details,
  excerpt,
  image,
  location,
  price,
  organizers,
  paymentLink,
  eventDate,
}: Event) => {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    id,
    title,
    details,
    excerpt,
    image,
    location,
    price,
    paymentLink,
    organizers,
    eventDate,
  });

  const response = await axios.put(`/api/events`, body, {
    headers,
  });
  return response.data;
};

const getMyEvents = async (id: string) => {
  let headersList = {
    Accept: "*/*",
  };

  let reqOptions = {
    url: `/api/events/attend/${id}/myevents`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  return response.data;
};

export const createEvent = async (formData: EventFormProps) => {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  const response = await axios.post(`/api/events`, formData, {
    headers,
  });
  return response.data;
};