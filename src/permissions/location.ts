const MAP_VALUE_GEOLOCATION = "geolocation"


const obterLocalizacao = (): void => {
    if (MAP_VALUE_GEOLOCATION in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude
          alert(latitude + " + " + longitude)
        },
        (error: GeolocationPositionError) => {
            alert("Erro em obter localização. Por favor, tente novamente ou contate o suporte")
        }
      );
    } else {
      alert("Erro em obter localização. Por favor, tente novamente ou contate o suporte")
    }
  };