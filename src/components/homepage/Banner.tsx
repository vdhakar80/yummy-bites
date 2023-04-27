function Banner() {
  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: `url(${"https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?w=1060&t=st=1682181632~exp=1682182232~hmac=b1206ec7d0d8fbbba64a054cffedf1593700275a02eba3a840c4ec2bb51ae9da"})`,
            height: "400px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div style={{ position: "absolute", zIndex: "1", top: "150px" }}>
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "800",
              color: "white",
              textAlign: "center",
            }}
          >
            Pizza and more, delivered to your door
          </h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
