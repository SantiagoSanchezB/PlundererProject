import React from 'react';
import axios from 'axios';

class Personajes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/SantiagoSanchezB/json-plunderer/Personajes')
      .then(resp => {
        this.setState({
          posts: resp.data
        });
      })
  }

  render() {
    const { posts } = this.state;
    const { match } = this.props;
    const personaje = posts.find(c => c.id === parseInt(match.params.id));

    return (
      <>
        {
          personaje ? (
            <section className="Detalle">
              <div className="section">
                <h1>{personaje.nombre}</h1>

                <div className='Personality'>
                  <h2>Personality</h2>
                  <p>{personaje.personality}</p>
                </div>
              </div>
              <div className="right">
                <img src={personaje.img} alt={personaje.img} />
                <div>
                  <p>Kanji</p>
                  <ul className='list-perso'>
                    {personaje.kanji}
                  </ul>
                  <hr class="hr" />
                  <p>First Count:</p>
                  <ul className='list-perso'>
                    {personaje.countS[0].firstcount.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  {personaje.countS[0].secondcount && (
                    <>
                      <hr class="hr" />
                      <p>Second Count:</p>
                      <ul>
                        {personaje.countS[0].secondcount.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </section>
          ) :
          <h1>El id del personaje no existe</h1>
        }
      </>
    );
  }
}

export default Personajes;
