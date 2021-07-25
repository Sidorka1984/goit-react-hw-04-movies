import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchCast } from "../../services/api.js";
import Actor from '../Actor/Actor';
import styles from "./Cast.module.css";
import { Error } from '../Error.js';


