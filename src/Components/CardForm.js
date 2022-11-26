import React, { useState } from "react";
import logo from "../logo.png";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./CardForm.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const initialValues = {
  tema: "",
  paket: "",
  bahasa: "",
  foto: "",
  linkFoto: "",
  namaAwal: "",
  panggilanWanita: "",
  lengkapWanita: "",
  wanitaAnakKe: "",
  namaIbuWanita: "",
  namaBapakWanita: "",
  panggilanPria: "",
  lengkapPria: "",
  priaAnakKe: "",
  namaIbuPria: "",
  namaBapakPria: "",
  akad: "",
  namaAcaraAkad: "",
  lainnyaAkad: "",
  hariAkad: "",
  pukulAkad: "",
  zonaWaktuAkad: "",
  tempatAkad: "",
  mapsAkad: "",
  namaAcaraResepsi: "",
  hariResepsi: "",
  resepsi: "",
  lainnyaResepsi: "",
  pukulResepsi: "",
  zonaWaktuResepsi: "",
  tempatResepsi: "",
  mapsResepsi: "",
  musik: "",
  loveStory: "",
  live: "",
  nomorRek: "",
  namaBank: "",
  atasNama: "",
  daftarHadir: "",
  nomorCatin: "",
  alamat: "",
  namaPenerima: "",
  rsvp: "",
  waKonfirmasi: "",
};
export default function CardForm(props) {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [visible, setVisible] = useState(false);
  const [visibleGold, setVisibleGold] = useState(false);
  const [visibleAkad, setVisibleAkad] = useState(false);
  const [visibleResepsi, setVisibleResepsi] = useState(false);
  const capitalize = (s) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  const [data, setData] = useState("");
  const [dataResepsi, setDataResepsi] = useState("");
  const [dataGold, setDataGold] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6285701119467&text=" +
        "Tema : " +
        values.tema +
        "%0aBahasa : " +
        values.bahasa +
        "%0aPaket : " +
        values.paket +
        "%0aFoto : " +
        values.foto +
        "%0aDaftar Kehadiran : " +
        values.daftarHadir +
        "%0aNama yang didahulukan : " +
        values.namaAwal +
        "%0a%0aMempelai Wanita %0aNama Panggilan " +
        values.panggilanWanita +
        "%0aNama Lengkap : " +
        values.lengkapWanita +
        "%0aNama Kedua Orang Tua : Putri Ke " +
        values.wanitaAnakKe +
        " dari " +
        values.namaIbuWanita +
        " dan " +
        values.namaBapakWanita +
        "%0a%0aMempelai Pria %0aNama Panggilan : " +
        values.panggilanPria +
        "%0aNama Lengkap : " +
        values.lengkapPria +
        "%0aNama Kedua Orang Tua : Putra Ke " +
        values.priaAnakKe +
        " dari " +
        values.namaIbuPria +
        " dan " +
        values.namaBapakPria +
        "%0a%0aRincian Acara %0a-Akad Nikah, Pemberkatan, dll %0a" +
        data +
        "%0aHari, Tanggal Bulan Tahun : " +
        values.hariAkad +
        ", " +
        values.akad +
        "%0aPukul : " +
        values.pukulAkad +
        " " +
        values.zonaWaktuAkad +
        "%0aTempat acara : " +
        values.tempatAkad +
        "%0aMaps acara : " +
        values.mapsAkad +
        "%0a%0aResepsi %0a" +
        dataResepsi +
        "%0aHari, Tanggal Bulan Tahun : " +
        values.hariResepsi +
        ", " +
        values.resepsi +
        "%0aPukul : " +
        values.pukulResepsi +
        " " +
        values.zonaWaktuResepsi +
        "%0aTempat acara : " +
        values.tempatResepsi +
        "%0aMaps acara : " +
        values.mapsResepsi +
        "%0a%0aMusik : " +
        values.musik +
        dataGold;
    }
    // console.log(data);
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };
  const handleInputChange = (e) => {
    // setData("%0aAcara : " + values.namaAcaraAkad);
    const { name, value } = e.target;
    if (e.target.name === "daftarHadir" && e.target.value === "Iya") {
      setVisible(!visible);
    } else if (e.target.name === "daftarHadir" && e.target.value === "Tidak") {
      setVisible(false);
    }
    if (e.target.name === "paket" && e.target.value === "Gold") {
      setVisibleGold(!visible);
      setDataGold(
        "%0aLove Story : " +
          values.loveStory +
          "%0aLive Streaming : " +
          values.live +
          "%0a%0aWedding Gift %0a%0aAmplop Digital%0aNomor Rekening : " +
          values.nomorRek +
          "%0aNama Bank : " +
          values.namaBank +
          "%0aAtas Nama : " +
          values.atasNama +
          "%0a%0aKirim Hadiah%0aAlamat : " +
          values.alamat +
          "%0aNama Penerima : " +
          values.namaPenerima +
          "%0aWA Konfirmasi Amplop/Penerima : " +
          values.waKonfirmasi +
          "%0aQR Code RSVP : " +
          values.rsvp
      );
    } else if (
      e.target.name === "paket" &&
      (e.target.value === "Silver" || e.target.value === "Bronze")
    ) {
      setVisibleGold(false);
      setDataGold("");
    }
    if (e.target.name === "namaAcaraAkad" && e.target.value === "Lainnya") {
      setVisibleAkad(!visibleAkad);
    } else if (
      e.target.name === "namaAcaraAkad" &&
      (e.target.value === "Akad" || e.target.value === "Pemberkatan")
    ) {
      setVisibleAkad(false);
    }
    if (e.target.name === "namaAcaraResepsi" && e.target.value === "Lainnya") {
      setVisibleResepsi(!visibleResepsi);
    } else if (
      e.target.name === "namaAcaraResepsi" &&
      (e.target.value === "Resepsi" || e.target.value === "Walimatul Ursy")
    ) {
      setVisibleResepsi(false);
    }
    if (!!values.lainnyaAkad) {
      setData("%0aAcara : " + values.lainnyaAkad);
    } else {
      setData("%0aAcara : " + values.namaAcaraAkad);
    }
    if (!!values.lainnyaResepsi) {
      setDataResepsi("%0aAcara : " + values.lainnyaResepsi);
    } else {
      setDataResepsi("%0aAcara : " + values.namaAcaraResepsi);
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="m-auto mt-5 mb-5 align-self-center Card">
            <Card.Header as="h3" className="card-header">
              <img src={logo} alt="logo" className="logo me-2" />
              Form Data Undangan
            </Card.Header>
            <Card.Body>
              <Form
                className="form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">Tema Undangan</Form.Label>
                  <Form.Select
                    name="tema"
                    value={values.tema}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Silakan Pilih Tema
                    </option>
                    <option value="Tema 01">Tema 01</option>
                    <option value="Tema AE">Tema AE</option>
                    <option value="Tema AD">Tema AD</option>
                    <option value="Tema AC">Tema AC</option>
                    <option value="Tema AA">Tema AA</option>
                    <option value="Tema P">Tema P</option>
                    <option value="Tema Q">Tema Q</option>
                    <option value="Tema W">Tema W</option>
                    <option value="Tema X">Tema X</option>
                    <option value="Tema Y">Tema Y</option>
                    <option value="Tema Z">Tema Z</option>
                    <option value="Tema Jawa">Tema Jawa</option>
                    <option value="Tema Minang">Tema Minang</option>
                    <option value="Tema Aqiqah">Tema Aqiqah</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Tema Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">Bahasa Undangan</Form.Label>
                  <Form.Select
                    name="bahasa"
                    value={values.bahasa}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Silakan Pilih Bahasa
                    </option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Inggris">Inggris</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Bahasa Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">Paket Undangan</Form.Label>
                  <Form.Select
                    name="paket"
                    value={values.paket}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Silakan Pilih Paket
                    </option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Bronze">Bronze</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Paket Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">
                    Menggunakan Foto
                  </Form.Label>
                  <Form.Select
                    name="foto"
                    value={values.foto}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Pilih
                    </option>
                    <option value="Dengan Foto">Dengan Foto</option>
                    <option value="Tanpa Foto">Tanpa Foto</option>
                    <option value="Animasi">Animasi</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Foto Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">
                    Nama yang didahulukan
                  </Form.Label>
                  <Form.Select
                    name="namaAwal"
                    value={values.namaAwal}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Pilih
                    </option>
                    <option value="Wanita">Wanita</option>
                    <option value="Pria">Pria</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Nama Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-person-heart me-2"></i>
                      <div className="labelForm">Data Mempelai</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="labelForm">Mempelai Wanita</div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Panggilan"
                              className="mb-3"
                            >
                              <Form.Control
                                name="panggilanWanita"
                                value={capitalize(values.panggilanWanita)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Nama Panggilan"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Lengkap"
                              className="mb-3"
                            >
                              <Form.Control
                                name="lengkapWanita"
                                value={capitalize(values.lengkapWanita)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                minLength={4}
                                placeholder="Masukan Nama Lengkap"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Lengkap Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Anak ke/Putri ke"
                              className="mb-3"
                            >
                              <Form.Control
                                name="wanitaAnakKe"
                                value={capitalize(values.wanitaAnakKe)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Anak Ke"
                              />
                              <Form.Control.Feedback type="invalid">
                                Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Ibu"
                              className="mb-3"
                            >
                              <Form.Control
                                name="namaIbuWanita"
                                value={capitalize(values.namaIbuWanita)}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Nama Ibu"
                                // defaultValue="Putri Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Ibu Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Bapak"
                              className="mb-3"
                            >
                              <Form.Control
                                name="namaBapakWanita"
                                value={capitalize(values.namaBapakWanita)}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Nama Bapak"
                                // defaultValue="Putri Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Bapak Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <div className="labelForm">Mempelai Pria</div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Panggilan"
                              className="mb-3"
                            >
                              <Form.Control
                                name="panggilanPria"
                                value={capitalize(values.panggilanPria)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Nama Panggilan"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Lengkap"
                              className="mb-3"
                            >
                              <Form.Control
                                name="lengkapPria"
                                value={capitalize(values.lengkapPria)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Nama Lengkap"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Lengkap Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Anak ke/Putra ke"
                              className="mb-3"
                            >
                              <Form.Control
                                name="priaAnakKe"
                                value={capitalize(values.priaAnakKe)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Anak Ke"
                              />
                              <Form.Control.Feedback type="invalid">
                                Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Ibu"
                              className="mb-3"
                            >
                              <Form.Control
                                required
                                name="namaIbuPria"
                                value={capitalize(values.namaIbuPria)}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Masukan Nama Ibu"
                                // defaultValue="Putra Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Ibu Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Bapak"
                              className="mb-3"
                            >
                              <Form.Control
                                name="namaBapakPria"
                                value={capitalize(values.namaBapakPria)}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Nama Bapak"
                                // defaultValue="Putri Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Bapak Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-calendar2-check me-2"></i>
                      <div className="labelForm">Rincian Acara</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="labelForm">
                              Akad Nikah, Pemberkatan, dll
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Form.Group className="mb-3">
                              <Form.Label className="labelForm">
                                Acara
                              </Form.Label>
                              <Form.Select
                                name="namaAcaraAkad"
                                value={values.namaAcaraAkad}
                                onChange={handleInputChange}
                                required
                              >
                                <option value="" disabled hidden>
                                  Silakan Pilih
                                </option>
                                <option value="Akad">Akad</option>
                                <option value="Pemberkatan">Pemberkatan</option>
                                <option value="Lainnya">Lainnya</option>
                              </Form.Select>
                              {visibleAkad && (
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Acara "
                                  className="formTambah mt-3"
                                >
                                  <Form.Control
                                    name="lainnyaAkad"
                                    value={values.lainnyaAkad}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    placeholder="Masukan Nama Acara"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Nama Acara Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              )}
                              <Form.Control.Feedback type="invalid">
                                Acara Belum Dipilih
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                              <Col sm={3}>
                                <Form.Select
                                  required
                                  className="hari"
                                  name="hariAkad"
                                  value={values.hariAkad}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Hari
                                  </option>
                                  <option value="Senin">Senin</option>
                                  <option value="Selasa">Selasa</option>
                                  <option value="Rabu">Rabu</option>
                                  <option value="Kamis">Kamis</option>
                                  <option value="Jumat">Jumat</option>
                                  <option value="Sabtu">Sabtu</option>
                                  <option value="Minggu">Minggu</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Hari Belum Dipilih
                                </Form.Control.Feedback>
                              </Col>
                              <Col sm={9}>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Tanggal Bulan Tahun"
                                  className="formTanggal mb-3"
                                >
                                  <Form.Control
                                    name="akad"
                                    value={capitalize(values.akad)}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    placeholder="Masukan Hari, Tanggal Bulan Tahun"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Tanggal Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Pukul"
                                >
                                  <Form.Control
                                    required
                                    name="pukulAkad"
                                    value={values.pukulAkad}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="pukul"
                                  />
                                  <Form.Text muted>
                                    Format : .. s/d ..
                                  </Form.Text>
                                  <Form.Control.Feedback type="invalid">
                                    waktu Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                              <Col>
                                <Form.Select
                                  required
                                  className="zona"
                                  name="zonaWaktuAkad"
                                  value={values.zonaWaktuAkad}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Zonasi
                                  </option>
                                  <option value="WIB">WIB</option>
                                  <option value="WITA">WITA</option>
                                  <option value="WIT">WIT</option>
                                </Form.Select>
                              </Col>
                            </Row>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Tempat Acara"
                              className="mb-3 mt-3"
                            >
                              <Form.Control
                                name="tempatAkad"
                                value={capitalize(values.tempatAkad)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Tempat Acara"
                              />
                              <Form.Control.Feedback type="invalid">
                                Tempat Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Maps Acara"
                              className="mb-3"
                            >
                              <Form.Control
                                name="mapsAkad"
                                value={capitalize(values.mapsAkad)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Maps"
                              />
                              <Form.Control.Feedback type="invalid">
                                Maps Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <div className="labelForm">Resepsi</div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Form.Group className="mb-3">
                              <Form.Label className="labelForm">
                                Acara
                              </Form.Label>
                              <Form.Select
                                name="namaAcaraResepsi"
                                value={values.namaAcaraResepsi}
                                onChange={handleInputChange}
                                required
                              >
                                <option value="" disabled hidden>
                                  Silakan Pilih
                                </option>
                                <option value="Resepsi">Resepsi</option>
                                <option value="Walimatul Ursy">
                                  Walimatul Ursy
                                </option>
                                <option value="Lainnya">Lainnya</option>
                              </Form.Select>
                              {visibleResepsi && (
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Acara "
                                  className="formTambah mt-3"
                                >
                                  <Form.Control
                                    name="lainnyaResepsi"
                                    value={values.lainnyaResepsi}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    placeholder="Masukan Nama Acara"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Nama Acara Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              )}
                              <Form.Control.Feedback type="invalid">
                                Acara Belum Dipilih
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                              <Col sm={3}>
                                <Form.Select
                                  required
                                  className="hari"
                                  name="hariResepsi"
                                  value={values.hariResepsi}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Hari
                                  </option>
                                  <option value="Senin">Senin</option>
                                  <option value="Selasa">Selasa</option>
                                  <option value="Rabu">Rabu</option>
                                  <option value="Kamis">Kamis</option>
                                  <option value="Jumat">Jumat</option>
                                  <option value="Sabtu">Sabtu</option>
                                  <option value="Minggu">Minggu</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Hari Belum Dipilih
                                </Form.Control.Feedback>
                              </Col>
                              <Col sm={9}>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Tanggal Bulan Tahun"
                                  className="formTanggal mb-3"
                                >
                                  <Form.Control
                                    name="resepsi"
                                    value={capitalize(values.resepsi)}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    placeholder="Masukan Hari, Tanggal Bulan Tahun"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Tanggal Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Pukul"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    required
                                    name="pukulResepsi"
                                    value={values.pukulResepsi}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="pukul"
                                  />
                                  <Form.Text muted>
                                    Format : .. s/d ..
                                  </Form.Text>
                                  <Form.Control.Feedback type="invalid">
                                    waktu Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                              <Col>
                                <Form.Select
                                  required
                                  className="zona"
                                  name="zonaWaktuResepsi"
                                  value={values.zonaWaktuResepsi}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Zonasi
                                  </option>
                                  <option value="WIB">WIB</option>
                                  <option value="WITA">WITA</option>
                                  <option value="WIT">WIT</option>
                                </Form.Select>
                              </Col>
                            </Row>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Tempat Acara"
                              className="mb-3"
                            >
                              <Form.Control
                                name="tempatResepsi"
                                value={capitalize(values.tempatResepsi)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Tempat Acara"
                              />
                              <Form.Control.Feedback type="invalid">
                                Tempat Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Maps Acara"
                              className="mb-3"
                            >
                              <Form.Control
                                name="mapsResepsi"
                                value={capitalize(values.mapsResepsi)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Maps"
                              />
                              <Form.Control.Feedback type="invalid">
                                Maps Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-music-note-beamed me-2"></i>
                      <div className="labelForm">Musik</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-2">
                        <Form.Label className="labelForm">
                          Backsound Undangan
                        </Form.Label>
                        <Form.Control
                          required
                          name="musik"
                          value={values.musik}
                          onChange={handleInputChange}
                          type="text"
                          placeholder="Masukan Link dan detik lagu dimulai"
                        />
                        <Form.Control.Feedback type="invalid">
                          Musik Belum Diisi
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {visibleGold && (
                  <>
                    <label className="mt-1">
                      Data Tambahan Khusus Paket Gold
                    </label>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <i className="bi bi-chat-heart me-2"></i>Love Story
                        </Accordion.Header>
                        <Accordion.Body>
                          <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Ceritakan ceritamu disini"
                          >
                            <Form.Control
                              name="loveStory"
                              value={values.loveStory}
                              onChange={handleInputChange}
                              as="textarea"
                              placeholder="Ceritakan ceritamu disini"
                              style={{ height: "100px" }}
                            />
                          </FloatingLabel>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <i className="bi bi-youtube me-2"></i>Live Streaming
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form.Group className="mb-2">
                            <Form.Label>Akun Media Sosial</Form.Label>
                            <Form.Control
                              name="live"
                              value={values.live}
                              onChange={handleInputChange}
                              type="text"
                              placeholder="Masukan Link Media Sosial"
                            />
                          </Form.Group>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <i className="bi bi bi-box2 me-2"></i>
                          <div>Wedding Gift</div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <i className="bi bi-envelope me-2"></i>Amplop
                                Digital
                              </Accordion.Header>
                              <Accordion.Body>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nomor Rekening"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="nomorRek"
                                    value={values.nomorRek}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nomor Rekening"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Bank"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="namaBank"
                                    value={values.namaBank}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nama Bank"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Atas Nama"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="atasNama"
                                    value={values.atasNama}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Atas Nama Bank"
                                  />
                                </FloatingLabel>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <i className="bi bi-gift me-2"></i>Kirim Hadiah
                              </Accordion.Header>
                              <Accordion.Body>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Alamat"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="alamat"
                                    value={values.alamat}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Alamat"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Penerima"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="namaPenerima"
                                    value={values.namaPenerima}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nama Penerima"
                                  />
                                </FloatingLabel>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Nomor WA Konfirmasi "
                            className="mt-3"
                          >
                            <Form.Control
                              name="waKonfirmasi"
                              value={values.waKonfirmasi}
                              onChange={handleInputChange}
                              required
                              type="text"
                              placeholder="Masukan Nomor"
                            />
                            <Form.Control.Feedback type="invalid">
                              Nomor Belum Diisi
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <i className="bi bi bi-whatsapp me-2"></i>
                          <div>Reservasi Kehadiran Lewat WA</div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              Reservasi Kehadiran Lewat WA
                            </Form.Label>
                            <Form.Select
                              name="daftarHadir"
                              value={values.daftarHadir}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled hidden>
                                Silakan Pilih
                              </option>
                              <option value="Iya">Iya</option>
                              <option value="Tidak">Tidak</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Daftar Hadir Belum Dipilih
                            </Form.Control.Feedback>
                            {visible && (
                              <FloatingLabel
                                controlId="floatingInput"
                                label="Nomor Calon Pengantin "
                                className="formTambah mt-3"
                              >
                                <Form.Control
                                  name="nomorCatin"
                                  value={values.nomorCatin}
                                  onChange={handleInputChange}
                                  required
                                  type="text"
                                  placeholder="Masukan Nomor"
                                />
                                <Form.Control.Feedback type="invalid">
                                  Nomor Belum Diisi
                                </Form.Control.Feedback>
                              </FloatingLabel>
                            )}
                          </Form.Group>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <i className="bi bi bi-qr-code me-2"></i>
                          <div>QR Code RSVP</div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form.Group className="mb-2">
                            <Form.Label>QR Code RSVP</Form.Label>
                            <Form.Select
                              name="rsvp"
                              value={values.rsvp}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled hidden>
                                Silakan Pilih
                              </option>
                              <option value="Iya">Iya</option>
                              <option value="Tidak">Tidak</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              RSVP Belum Dipilih
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </>
                )}
                <Button type="submit" className="Button mt-4 mb-2">
                  <i className="bi bi-whatsapp me-2"></i>
                  Kirim
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
