import './HomePage.css'

export default function AboutPage() {
  return (
    <div className="home">
      <section className="home__section">
        <h1 className="home__section-title">關於</h1>
        <p className="home__section-desc" style={{ marginBottom: '1rem' }}>
          曹同和，Python 後端與 IoT Edge 應用開發，熟悉異質協定整合與現場建置。
        </p>
        <p className="home__welcome-desc" style={{ marginBottom: '1rem' }}>
          具備兩年以上 Python 後端與 IoT Edge 應用開發經驗，參與智慧交通專案，熟悉異質通訊協定整合（UDP、HTTP、MQTT、Socket IO、TCP、RS485）、資料流處理與 PostgreSQL，以及現場建置與維運。
        </p>
        <p className="home__welcome-desc">
          技術棧：Python · Flask · ZMQ · Asyncio · PostgreSQL · Git
        </p>
      </section>
    </div>
  )
}
