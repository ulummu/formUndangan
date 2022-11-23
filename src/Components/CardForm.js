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
  orangTuaWanita: "",
  panggilanPria: "",
  lengkapPria: "",
  orangTuaPria: "",
  akad: "",
  pukulAkad: "",
  zonaWaktuAkad: "",
  tempatAkad: "",
  mapsAkad: "",
  resepsi: "",
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
};
export default function CardForm(props) {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [visible, setVisible] = useState(false);
  const capitalize = (s) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

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
        "%0aLink Foto : " +
        values.linkFoto +
        "%0aDaftar Kehadiran : " +
        values.daftarHadir +
        "%0aNomor Calon Pengantin : " +
        values.nomorCatin +
        "%0aNama yang didahulukan : " +
        values.namaAwal +
        "%0a%0aMempelai Wanita %0aNama Panggilan " +
        values.panggilanWanita +
        "%0aNama Lengkap : " +
        values.lengkapWanita +
        "%0aNama Kedua Orang Tua : Putri dari " +
        values.orangTuaWanita +
        "%0a%0aMempelai Pria %0aNama Panggilan : " +
        values.panggilanPria +
        "%0aNama Lengkap : " +
        values.lengkapPria +
        "%0aNama Kedua Orang Tua : Putra dari " +
        values.orangTuaPria +
        "%0a%0aRincian Acara %0a-Akad Nikah, Pemberkatan, dll %0aHari, Tanggal Bulan Tahun : " +
        values.akad +
        "%0aPukul : " +
        values.pukulAkad +
        " " +
        values.zonaWaktuAkad +
        "%0aTempat acara : " +
        values.tempatAkad +
        "%0aMaps : " +
        values.mapsAkad +
        "%0a%0aResepsi %0aHari, Tanggal Bulan Tahun : " +
        values.resepsi +
        "%0aPukul : " +
        values.pukulResepsi +
        " " +
        values.zonaWaktuResepsi +
        "%0aTempat acara : " +
        values.tempatResepsi +
        "%0aMaps : " +
        values.mapsResepsi +
        "%0a%0aMusik : " +
        values.musik +
        "%0aLove Story : " +
        values.loveStory +
        "%0aLive Streaming : " +
        values.live +
        "%0a%0aAngpao Digital %0a%0aNomor Rekening : " +
        values.nomorRek +
        "%0aLive Nama Bank : " +
        values.namaBank +
        "%0aLive Atas Nama : " +
        values.atasNama;
    }
    console.log(values);
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "daftarHadir" && e.target.value === "Iya") {
      setVisible(!visible);
    } else if (e.target.name === "daftarHadir" && e.target.value === "Tidak") {
      setVisible(false);
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
                    <option value="" selected disabled hidden>
                      Silakan Pilih Tema
                    </option>
                    <option value="Tema AE">AE</option>
                    <option value="Tema AD">AD</option>
                    <option value="Tema AA">AA</option>
                    <option value="Tema P">P</option>
                    <option value="Tema Q">Q</option>
                    <option value="Tema W">W</option>
                    <option value="Tema X">X</option>
                    <option value="Tema Y">Y</option>
                    <option value="Tema Z">Z</option>
                    <option value="Tema Jawa">Jawa</option>
                    <option value="Tema Minang">Minang</option>
                    <option value="Tema Aqiqah">Aqiqah</option>
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
                    <option value="" selected disabled hidden>
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
                    <option value="" selected disabled hidden>
                      Silakan Pilih Paket
                    </option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
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
                    <option value="" selected disabled hidden>
                      Pilih
                    </option>
                    <option value="Iya">Iya</option>
                    <option value="Tidak">Tidak</option>
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
                    <option value="" selected disabled hidden>
                      Pilih
                    </option>
                    <option value="Wanita">Wanita</option>
                    <option value="Pria">Pria</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Nama Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">
                    Reservasi Kehadiran Lewat WA
                  </Form.Label>
                  <Form.Select
                    name="daftarHadir"
                    value={values.daftarHadir}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" selected disabled hidden>
                      Pilih
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
                      className="linkFoto"
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
                              label="Nama Kedua Orang Tua"
                              className="mb-3"
                            >
                              <Form.Control
                                name="orangTuaWanita"
                                value={capitalize(values.orangTuaWanita)}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Nama Kedua orang tua"
                                // defaultValue="Putri Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama orangtua Belum Diisi
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
                              label="Nama Kedua Orang Tua"
                              className="mb-3"
                            >
                              <Form.Control
                                required
                                name="orangTuaPria"
                                value={capitalize(values.orangTuaPria)}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Masukan Nama Orangtua"
                                // defaultValue="Putra Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Orang tua Belum Diisi
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
                                name="namaAwal"
                                value={values.namaAwal}
                                onChange={handleInputChange}
                                required
                              >
                                <option value="" selected disabled hidden>
                                  Silakan Pilih
                                </option>
                                <option value="Akad">Akad</option>
                                <option value="Pemberkatan">Pemberkatan</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                Acara Belum Dipilih
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                              <Col sm={3}>
                                <Form.Select
                                  required
                                  className="hari"
                                  name="hari"
                                  value={values.hari}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" selected disabled hidden>
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
                                  className="mb-3"
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
                                    Format : ... s/d ...
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
                                  <option value="" selected disabled hidden>
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
                              label="Maps"
                              className="mb-3"
                            >
                              <Form.Control
                                name="mapsAkad"
                                value={values.mapsAkad}
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
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Hari, Tanggal Bulan Tahun"
                              className="mb-3"
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
                                    Format : ... s/d ...
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
                                  <option value="" selected disabled hidden>
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
                              label="Maps"
                              className="mb-3"
                            >
                              <Form.Control
                                name="mapsResepsi"
                                value={values.mapsResepsi}
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
                          Musik Pengiring
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
                        <Form.Label className="labelForm">
                          Akun Media Sosial
                        </Form.Label>
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
                      <i className="bi bi-envelope me-2"></i>Angpao Digital
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
                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">
                    Daftar Kehadiran Lewat Barcode
                  </Form.Label>
                  <Form.Select
                    name="rsvp"
                    value={values.rsvp}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" selected disabled hidden>
                      Pilih
                    </option>
                    <option value="Iya">Iya</option>
                    <option value="Tidak">Tidak</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    RSVP Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>
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
