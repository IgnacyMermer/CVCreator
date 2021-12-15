import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [value, setValue] = useState(null);
  const [addExperience, setAddExperience] = useState({
    name: '',
    dateFrom: null,
    dateTo: null,
    description: ''
  });
  const [addUniversity, setAddUniversity] = useState({
    name: '',
    dateFrom: null,
    dateTo: null,
    field: '',
    specialization: '',
    level: ''
  });

  return (
    <div className="App">
      <p>Twoje dane:</p>
      <p>
        <TextField label="Imię" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }} />
        <TextField label="Nazwisko" variant="outlined" value={surname} onChange={(e) => { setSurname(e.target.value) }} />
      </p>
      <p>
        <TextField label="Numer telefonu" variant="outlined" type='number' value={phoneNumber}
          onChange={(e) => { setPhoneNumber(e.target.value) }} />
        <TextField label="E-mail" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
      </p>
      <p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data urodzenia"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField label="Miasto" variant="outlined" value={city} onChange={(e) => { setCity(e.target.value) }} />
      </p>

      <p>
        <TextField label="Nazwa" variant="outlined" value={addExperience.name}
          onChange={(e) => { setAddExperience({ ...addExperience, name: e.target.value }) }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data rozpoczęcia"
            value={addExperience.dateFrom}
            onChange={(newValue) => {
              setAddExperience({ ...addExperience, dateFrom: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data zakończenia"
            value={addExperience.dateTo}
            onChange={(newValue) => {
              setAddExperience({ ...addExperience, dateTo: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField label="Opis" variant="outlined" value={addExperience.description}
          onChange={(e) => { setAddExperience({ ...addExperience, description: e.target.value }) }} />
      </p>
      <p>
        <TextField label="Nazwa uczelni" variant="outlined" value={addUniversity.name}
          onChange={(e) => { setAddUniversity({ ...addUniversity, name: e.target.value }) }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data rozpoczęcia"
            value={addUniversity.dateFrom}
            onChange={(newValue) => {
              setAddUniversity({ ...addUniversity, dateFrom: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data zakończenia"
            value={addUniversity.dateTo}
            onChange={(newValue) => {
              setAddUniversity({ ...addUniversity, dateTo: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField label="Kierunek" variant="outlined" value={addUniversity.field}
          onChange={(e) => { setAddUniversity({ ...addUniversity, field: e.target.value }) }} />
        <TextField label="Specjalizacja" variant="outlined" value={addUniversity.specialization}
          onChange={(e) => { setAddUniversity({ ...addUniversity, specialization: e.target.value }) }} />
        <TextField label="Poziom wykształcenia" variant="outlined" value={addUniversity.level}
          onChange={(e) => { setAddUniversity({ ...addUniversity, level: e.target.value }) }} />
      </p>
    </div>
  );
}

export default App;
