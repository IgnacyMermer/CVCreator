const PDFDocument = require('pdfkit');
const fs = require('fs')

exports.getPdf = (req, res, status)=>{
    
    const doc = new PDFDocument({size: 'A4'});

    const name = "Jan Kowalski";
    const phoneNumber = "999999999";
    const email = "lalalalallala@test.com";
    const city = "Warszawa";
    const dateOfBirth = "1.1.2002";
    const experience = [
        {
            fromTo: "01.2016 - obecnie (2 lata 4 mies)",
            position: "Specjalista ds. rekrutacji",
            type: "IT",
            city: "Krakow",
            description: "Przeprowadzenie procesow rekrutacyjnych dla wszystkich dzialow"
        },
        {
            fromTo: "01.2012 - 01.2016(4 lata 0 mies)",
            position: "Specjalista ds. sprzedazy",
            type: "HR",
            city: "Warszawa",
            description: "Zarzadzanie dzialem sprzedazy w oddzialach w calej Polsce"
        },
        {
            fromTo: "01.2012 - 01.2016(4 lata 0 mies)",
            position: "Specjalista ds. sprzedazy",
            type: "HR",
            city: "Warszawa",
            description: "Zarzadzanie dzialem sprzedazy w oddzialach w calej Polsce"
        }
    ];

    const education = [
        {
            fromTo: "10.2008 - 06.2012",
            university: "Politechnika Warszawska, Wydzial: Elektroniki i Technik Informacyjnych",
            field: "Automatyka i Robotyka",
            specialization: "Programowanie robotow",
            level: "inzynier"
        },
        {
            fromTo: "10.2015 - 06.2016",
            university: "Akademia Gorniczo-Hutnicza, Wydzial: Elektroniki",
            field: "Zarzadzanie projektami",
            specialization: "Programowanie robotow",
            level: "inzynier"
        },
        {
            fromTo: "10.2015 - 06.2016",
            university: "Akademia Gorniczo-Hutnicza, Wydzial: Elektroniki",
            field: "Zarzadzanie projektami",
            specialization: "Programowanie robotow",
            level: "inzynier"
        },
    ];

    const languages = [
        "angielski: zaawansowany(C1)",
        "niemiecki: podstawowy(A2)"
    ];

    const skills = "Punktualnosc, zlota raczka, sprawne rozwiazywanie problemow";

    const interesed = "Sport, liga angielska, pilka siatkowa, zaklady bukmacherskie";

    let h = 30;

    doc.pipe(fs.createWriteStream('test.pdf'));

    //doc.rotate(90, {origin: [0,0]});

    doc.image(
        'zdj.png',
        20,
        50,
        { width: 150, height: 110 }
    );

    //doc.rotate(-90, {origin: [0,0]});

    doc.fontSize(25).text(name, 100, h, {align:'center', style: 'bold'});
    h+=40;

    doc.fontSize(14).text(`Numer telefonu: ${phoneNumber}`, 175, h, {align:'left', style: 'italic'});
    h+=30;

    doc.fontSize(14).text(`Adres e-mail: ${email}`, 175, h, {align:'left', style: 'italic'});
    h+=30;

    doc.fontSize(14).text(`Data urodzenia: ${dateOfBirth}`, 175, h, {align:'left', style: 'italic'});
    h+=30;

    doc.fontSize(14).text(`Miasto: ${city}`, 175, h, {align:'left', style: 'italic'});
    h+=50;

    doc.lineWidth(6);
    doc.lineCap('round').moveTo(50, h).lineTo(555, h).stroke();
    h+=20;
    h=checkH(h, doc);

    doc.fontSize(18).text('Doswiadczenie zawodowe:', 50, h, {align:'center', style: 'bold'});
    h+=30;
    h=checkH(h, doc);

    for(let i = 0; i<experience.length; i++){
        doc.fontSize(12).text(`${experience[i].fromTo}: `, 75, h, {align:'left', style: 'italic'});
        doc.fontSize(14).text(`${experience[i].position} | ${experience[i].type} | ${experience[i].city}`, 75, h+20, {align:'left', style: 'italic'});
        doc.fontSize(11).text('Krótki opis stanowiska:', 75, h+40, {align:'left', style: 'italic'});
        doc.fontSize(11).text(`- ${experience[i].description}`, 75, h+60, {align:'left', style: 'italic'});
        h+=90;
    }

    h+=20;

    doc.lineCap('round').moveTo(50, h).lineTo(555, h).stroke();
    h+=20;
    h=checkH(h, doc);

    doc.fontSize(18).text('Wyksztalcenie:', 50, h, {align:'center', style: 'bold'});
    h+=30;
    h=checkH(h, doc);

    for(let i=0; i<education.length; i++) {
        doc.fontSize(12).text(`${education[i].fromTo}: `, 75, h, {align:'left', style: 'italic'});
        doc.fontSize(14).text(education[i].university, 75, h+20, {align:'left', style: 'italic'});
        doc.fontSize(11).text(`Kierunek: ${education[i].field}, specjalizacja: ${education[i].specialization}`, 75, h+40, {align:'left', style: 'italic'});
        doc.fontSize(11).text(`Poziom wyksztalcenia: ${education[i].level}`, 75, h+60, {align:'left', style: 'italic'});
        h+=90;
        h=checkH(h, doc);
    }

    h+=20;

    doc.lineCap('round').moveTo(50, h).lineTo(555, h).stroke();
    h+=20;
    h=checkH(h, doc);

    doc.fontSize(18).text('Znajomosc jezykow:', 50, h, {align:'center', style: 'bold'});

    h+=30;

    for(let i=0; i<languages.length; i++){
        doc.fontSize(12).text(languages[i], 75, h, {align:'left', style: 'italic'});    
        h+=20;
    }

    h+=30;

    doc.lineCap('round').moveTo(50, h).lineTo(555, h).stroke();
    h+=20;

    doc.fontSize(18).text('Umiejetnosci:', 50, h, {align:'center', style: 'bold'});
    h+=30;
    doc.fontSize(12).text(skills, 75, h, {align:'left', style: 'italic'});
    h+=50;

    doc.lineCap('round').moveTo(50, h).lineTo(555, h).stroke();
    h+=30;

    doc.fontSize(18).text('Zainteresowania:', 50, h, {align:'center', style: 'bold'});
    h+=20;
    doc.fontSize(12).text(interesed, 75, h, {align:'left', style: 'italic'});   

    doc.end();

    return res.status(200).json({
        message: 'pdf'
    });   
}

const checkH = (h,doc)=>{
    if(h>720){
        h=70;
        doc.addPage({size: 'A4'});
        doc.lineWidth(6);
    }
    return h;
}