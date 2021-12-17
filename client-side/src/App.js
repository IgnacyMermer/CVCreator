import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
  const [experienceList, setExperienceList] = useState([]);
  const [errorExperience, setErrorExperience] = useState('');

  const [addUniversity, setAddUniversity] = useState({
    name: '',
    dateFrom: null,
    dateTo: null,
    field: '',
    specialization: '',
    level: ''
  });
  const [universityList, setUniversityList] = useState([]);
  const [errorUniversity, setErrorUniversity] = useState('');

  const [languages, setLanguages] = useState([]);
  const [languageTemp, setLanguageTemp] = useState('');


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
      </p>
      <p>
        <TextField label="Opis" variant="outlined" value={addExperience.description} multiline style={{ width: "70%" }}
          onChange={(e) => { setAddExperience({ ...addExperience, description: e.target.value }) }} />
      </p>

      <p style={{ color: 'red' }}>
        {errorExperience}
      </p>

      <p>
        <Button variant="contained" onClick={() => {
          if (addExperience.name != '' && addExperience.dateFrom != null && addExperience.dateTo != null && addExperience.description != '') {
            setErrorExperience('');
            setExperienceList([...experienceList, addExperience]);
            setAddExperience({
              name: '',
              dateFrom: null,
              dateTo: null,
              description: ''
            });
          }
          else {
            setErrorExperience('Wypełnij wszystkie pola');
          }

        }}>Dodaj</Button>
      </p>

      <p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nazwa</TableCell>
                <TableCell align="center">Doświadczenie</TableCell>
                <TableCell align="center">Od</TableCell>
                <TableCell align="center">Do</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {experienceList.map((experience, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell align="center" component="th" scope="row">
                    {experience.name && experience.name}
                  </TableCell>
                  <TableCell align="center">{experience.description && experience.description.toString()}</TableCell>
                  <TableCell align="center">{experience.dateFrom && experience.dateFrom.toLocaleDateString()}</TableCell>
                  <TableCell align="center">{experience.dateTo && experience.dateTo.toLocaleDateString()}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => {
                      setExperienceList(experienceList.filter((item, indexTemp) => indexTemp !== index));
                    }}>Usuń</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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

      <p style={{ color: 'red' }}>
        {errorUniversity}
      </p>

      <p>
        <Button variant="contained" onClick={() => {
          if (addUniversity.name != '' && addUniversity.dateFrom != null && addUniversity.dateTo != null && addUniversity.field != '' &&
            addUniversity.specialization != '' && addUniversity.level != '') {
            setErrorUniversity('');
            setUniversityList([...universityList, addUniversity]);
            setAddUniversity({
              name: '',
              dateFrom: null,
              dateTo: null,
              field: '',
              specialization: '',
              level: ''
            });
          }
          else {
            setErrorUniversity('Wypełnij wszystkie pola');
          }

        }}>Dodaj</Button>
      </p>

      <p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nazwa</TableCell>
                <TableCell align="center">Kierunek</TableCell>
                <TableCell align="center">Specjalizacja</TableCell>
                <TableCell align="center">Poziom wykształcenia</TableCell>
                <TableCell align="center">Od</TableCell>
                <TableCell align="center">Do</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {universityList.map((university, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell align="center" component="th" scope="row">
                    {university.name && university.name}
                  </TableCell>
                  <TableCell align="center">{university.field && university.field.toString()}</TableCell>
                  <TableCell align="center">{university.specialization && university.specialization.toString()}</TableCell>
                  <TableCell align="center">{university.level && university.level.toString()}</TableCell>
                  <TableCell align="center">{university.dateFrom && university.dateFrom.toLocaleDateString()}</TableCell>
                  <TableCell align="center">{university.dateTo && university.dateTo.toLocaleDateString()}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => {
                      setUniversityList(universityList.filter((item, indexTemp) => indexTemp !== index));
                    }}>Usuń</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </p>

      <p>
        <TextField label="Język obcy" variant="outlined" value={languageTemp} onChange={(e) => { setLanguageTemp(e.target.value) }} />
      </p>

      <p>
        <Button variant="contained" onClick={() =>{
          setLanguages([...languages, languageTemp]);
        }}>Dodaj</Button>
      </p>

      <p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nazwa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {languages.map((language, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell align="center" component="th" scope="row">
                    {language && language}
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => {
                      setLanguages(languages.filter((item, indexTemp) => indexTemp !== index));
                    }}>Usuń</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </p>      

    </div>
  );
}

export default App;
