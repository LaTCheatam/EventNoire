// frontend/src/components/SignupFormPage/index.js
import './SignupForm.css';

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";