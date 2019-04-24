import React, { Component } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  Link,
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from 'framework7-react';

export default class home extends Component {

  constructor() {
    super();

    this.state = {
      events: [
        {
          title: "No Te Va Gustar",
          description: "No te va gustar presenta su nuevo disco, y los hits de siempre. La banda del Emiliano, promete un show cerca de las 3 horas, a puro rock and roll y adrenalina.",
          org: "@NTVG",
          img: "https://paulestodo.com/adjuntos/imagenes/000/014/0000014850.jpg",
          day: "22/3/19",
          hour: "19:00"
        },
        {
          title: "Ella Es Tan Cargosa",
          description: "Tan cargosos como siempre, vienen a dar un show lleno de los hitazos de siempre. Ella Es Tan Cargosa es la banda con las canciones mas lindas del pais, y viene a hacer bailar a todo rosario :)",
          org: "@EllaEsTanCargosa",
          img: "http://www.latrastienda.com/tg/w.380-h.220-q.100/is-cnt/shows/img/00000777.jpg",
          day: "22/3/19",
          hour: "19:00"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Page name="home">
          {/* Top Navbar */}
          <Navbar sliding={false} large>
            <NavLeft>
              <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
            </NavLeft>
            <NavTitle sliding>Inicio</NavTitle>
            <NavTitleLarge>Inicio</NavTitleLarge>
          </Navbar>

          {this.state.events.map(event => {
            return (
              <Card key={event.title} className="demo-card-header-pic">
                <CardHeader
                  className="no-border"
                  valign="bottom"
                  style={{ backgroundImage: `url(${event.img})` }}
                >{event.title}</CardHeader>
                <CardContent>
                  <p className="date">Fecha: {event.day}, Hora: {event.hour}</p>
                  <p>{event.description} organizado por: <b>{event.org}</b></p>
                </CardContent>
                <CardFooter>
                  <Link>Mas info</Link>
                  <Link>Asistir</Link>
                </CardFooter>
              </Card>
            )
          })}

        </Page>
      </div>
    )
  }
}
