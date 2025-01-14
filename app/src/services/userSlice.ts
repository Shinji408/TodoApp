import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { get } from "@/services/apiClient";

const cookie = new Cookies();