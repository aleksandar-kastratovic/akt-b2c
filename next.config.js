/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    COMPANY: process.env.COMPANY,
    ADDRESS: process.env.ADDRESS,
    STREET: process.env.STREET,
    POSTCODE: process.env.POSTCODE,
    CITY: process.env.CITY,
    STATE: process.env.STATE,
    PIB: process.env.PIB,
    MB: process.env.MB,
    CODE: process.env.CODE,
    SITE: process.env.SITE,
    EMAIL: process.env.EMAIL,
    TELEPHONE: process.env.TELEPHONE,
    CAPTCHAKEY: process.env.CAPTCHAKEY,
    GTM_ENABLED: process.env.GTM_ENABLED,
    GTM_ID: process.env.GTM_ID,
    INSTAGRAM_KEY: process.env.INSTAGRAM_KEY,
    SHOW_CHECKOUT_SHIPPING_FORM: process.env.SHOW_CHECKOUT_SHIPPING_FORM,
  },
  images: {
    minimumCacheTTL: 60 * 60 * 12 * 90,
    unoptimized: true,
    domains: [
      "api.akt.croonus.com",
      "scontent.cdninstagram.com",
      "video.cdninstagram.com",
      "api.staging.croonus.com",
      "192.168.1.223",
      "scontent-frx5-1.cdninstagram.com",
      "scontent-frt3-2.cdninstagram.com",
      "scontent-frt3-1.cdninstagram.com",
      "scontent-vie1-1.cdninstagram.com",
      "scontent-atl3-1.cdninstagram.com",
      "scontent-cgk1-1.cdninstagram.com",
      "scontent-fco2-1.cdninstagram.com",
      "scontent.cdninstagram.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.akt.croonus.com",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/kontakt",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta-2/stolnjaci-2",
        destination: "/kuhinja-i-basta/stolnjaci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/uslovi-koriscenja",
        destination: "/strana/uslovi-koriscenja",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/politika-kolacica",
        destination: "/strana/politika-o-kolacicima",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/veleprodaja",
        destination: "/",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/prodavnice",
        destination: "/",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/novosti",
        destination: "/",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/cookie-settings",
        destination: "/",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine",
        destination: "/spavaca-soba/posteljine-uz-koje-koza-dise",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/sifon",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/pamucni-krep",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/krep-posteljina-od-cistog-pamuka-mekoca-bez-peglanja",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/pamucni-saten",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/antialergijska",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/antialergijska-posteljina",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/organska",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-organskog-pamuka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/flanel",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-flanela",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/damast",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/damast-posteljina",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci",
        destination: "/spavaca-soba/prekrivaci-kao-izraz-stila",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/step-deka-frotir",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/step-deka-prekrivac-modernog-stepa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/step-deka-krzno",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/krzneni-pokrivaci-i-prekrivaci-za-jos-topline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/frotir",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/frotir-prekrivac",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/saten-pokrivaci",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/saten-prekrivaci-za-krevet",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/mikrofiber",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/mikrofiber-pokrivaci-i-prekrivaci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/antialergijski",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/antialergijski-prekrivac",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/garnitura-sa-pokrivacem",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/garnitura-sa-prekrivacem",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani",
        destination: "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/pamucni",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/pamucni-jorgani",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/mikrofiber",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-od-mikrofibera",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/naturline",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/univerzalni",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-za-cetiri-godisnja-doba",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/antialergijski",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/antialergijski-jorgan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/comodo-a",
        destination:
          "/spavaca-soba/jastuci/antialergijski-jastuci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/comodo-s",
        destination:
          "/spavaca-soba/jastuci/jastuci-podesive-visine-comodo-s",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/comodo-s-putni-jastuci",
        destination:
          "/spavaca-soba/jastuci/jastuk-za-putovanje-comodo-s",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/comodo-h",
        destination:
          "/spavaca-soba/jastuci/heljda-jastuci-za-spavanje",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/microsoft",
        destination:
          "/spavaca-soba/jastuci/mikrofiber-jastuci-za-spavanje-na-oblaku",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/bebi",
        destination: "/spavaca-soba/jastuci/jastuci-za-bebe",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni",
        destination: "/spavaca-soba/jastuci/dekorativni-jastuci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/oks-jastuci-za-pod",
        destination: "/spavaca-soba/jastuci/oks-jastuci-za-pod",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnice",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jorganske-navlake",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/navlaka-za-jorgan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/krevetski-carsafi",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jogi-navlake",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/carsafi-sa-lastisem",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/zastite-za-dusek",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/zastite-za-dusek",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/stolnjaci",
        destination: "/kuhinja-i-basta/stolnjaci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe",
        destination: "/kuhinja-i-basta/kuhinjske-krpe",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje",
        destination: "/kuhinja-i-basta/kecelje",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi",
        destination: "/kuhinja-i-basta/kuhinjski-setovi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/stolicnjaci",
        destination: "/kuhinja-i-basta/stolicnjaci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo",
        destination: "/tekstil-za-kupatilo",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri",
        destination: "/tekstil-za-kupatilo/peskiri",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/plazni-peskiri",
        destination: "/tekstil-za-kupatilo/plazni-peskiri",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/bademantili",
        destination:
          "/tekstil-za-kupatilo/bademantil-za-udobnost-u-svakom-danu",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/setovi-peskira",
        destination: "/tekstil-za-kupatilo/setovi-peskira",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine",
        destination: "/program-za-bebe/posteljine-za-bebe",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljine-sa-ogradicom",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljine-sa-rajsferslusom",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-sa-rajsferslusom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-bez-ogradice-i-jastuci-za-bebe",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-bez-ogradice-i-jastuci-za-bebe",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/pokrivaci-za-bebe-disney",
        destination: "/program-za-bebe/posteljine-za-bebe/prekrivaci-za-bebe",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/dodaci",
        destination: "/program-za-bebe/posteljine-za-bebe/dodaci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine",
        destination: "/program-za-decu/posteljine-za-decu",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci",
        destination: "/program-za-decu/prekrivaci-za-decu",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/peskiri",
        destination: "/program-za-decu/peskiri-za-decu",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/trikotaza",
        destination: "/program-za-decu/garderoba-za-decu",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/bademantili",
        destination: "/program-za-decu/bademantili-za-decu",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pidzame",
        destination: "/program-za-decu/pidzame-za-decu-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljine-za-decu",
        destination: "/warner-bros/posteljine-za-decu-3",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/peskiri",
        destination: "/warner-bros/peskiri-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe",
        destination: "/warner-bros/garderoba-za-bebe-i-decu",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/pokrivaci",
        destination: "/warner-bros/prekrivaci-za-bebe-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljine-za-krevetac",
        destination: "/warner-bros/posteljina-za-bebe-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/bebi-posteljina-meda-sa-ogradicom",
        destination: "/bebi-posteljina-meda-sa-ogradicom-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/nepromocivi-carsaf-za-krevetac-bez",
        destination: "/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/set-peskira-duet",
        destination: "/set-peskira-duet-3",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/posteljina-od-pamucnog-sifona-9127-200x200-sa",
        destination: "/posteljina-od-pamucnog-sifona-9127-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/peskir-400gr-m2-sivi-30x50",
        destination: "/peskir-400grm2-sivi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/punilo-za-jastuk-40x40",
        destination: "/punilo-za-jastuk",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/prostirka-za-namestaj-siva-set",
        destination: "/prostirka-za-namestaj-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/peskir-400g-m2-plava-30x50",
        destination: "/peskir-400gm2-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/peskir-400g-m2-pesak-30x50",
        destination: "/peskir-400gm2-pesak-30x50",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/posteljina-od-spamucnog-satena-bez-140x200-sa",
        destination: "/posteljina-od-pamucnog-satena-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/ukrasni-jastuk-tom-jerry-zuti",
        destination: "/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/portikla-lonney",
        destination: "/portikla-loonney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/jorgan-naturline-vuna-140x200",
        destination: "/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/komplet-partizan-74",
        destination: "/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/komplet-crvena-zvezda-98",
        destination: "/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/posteljina-vintage-s-siva-200x200-sa",
        destination: "/posteljina-vintage-ssiva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinjska-krpa-69-2",
        destination: "/kuhinjska-krpa-692",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinjska-krpa-69-3",
        destination: "/kuhinjska-krpa-693",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/bodi-atlet-tomandjerry-22-68",
        destination: "/bodi-atlet-tomjerry-22-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/vreca-interlok-looney-tunes-80cm-80-86",
        destination: "/vreca-interlok-looney-tunes-80cm80-86",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/bebi-posteljina-3-1",
        destination: "/bebi-posteljina-kamion",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/pokrivac-snezana-i-sedam-patuljaka",
        destination: "/step-deka-frotir-snezana-i-sedam-patuljaka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/decija-posteljina-151-1344",
        destination: "/decija-posteljina-150-1344",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/posteljina-pamucni-saten-1332-140x200-sa",
        destination: "/posteljina-saten-pamuk-1332-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/lux-peskir-4000790-siva-50x90",
        destination: "/peskir-lux-50x90-550gsm-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/jorgan-komfor-1337-140x200",
        destination: "/jorgan-komfor-1337",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/jastucnica-stampani-sifon-1336-40x60",
        destination: "/jastucnica-stampani-sifon-1336-40x60-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/jastucnica-saten-bez-40x60",
        destination: "/jastucnica-saten-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/step-deka-frotir-1338-140x200",
        destination: "/step-deka-frotir-1338",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/jastuk-saten-1331-50x70",
        destination: "/jastucnica-saten-1331-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kapica-tomandjerry-22-23-44",
        destination: "/kapica-tomjerry-2223-44",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zeka-tomandjerry-22-23-68",
        destination: "/zeka-tomjerry-2223-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/bodi-dug-rukav-22-23-80",
        destination: "/bodi-dug-rukav-2223-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/pokrivac-tweety-krzno-22-23",
        destination: "/prekrivac-tweety-krzno-2223",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/pidzama-tomandjerry-22-23-4",
        destination: "/pidzama-tomjerry-2223-4",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/801-set-plavigrb-posteljni-set",
        destination: "/801-setplavigrb-posteljni-set",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/pokrivac-frotir-bez-talas-50-bezt-200x200",
        destination: "/frotir-prekrivac-200x210-talas-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-9100-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-sa-ogradicom/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-sa-ogradicom/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-crvena-zvezda-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-sa-ogradicom/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-sa-ogradicom/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/bebi-program/bebi-posteljina-partizan-sa-ogradicom",
        destination:
          "/zvezda-vs-partizan/bebi-posteljina-partizan-sa-ogradicom",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bebi-posteljina-meda-sa-ogradicom",
        destination: "/akcija/bebi-posteljina-meda-sa-ogradicom-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/bebi-posteljina-meda-sa-ogradicom",
        destination: "/akcija/bebi-posteljina-meda-sa-ogradicom-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-sa-ogradicom/bebi-posteljina-meda-sa-ogradicom",
        destination: "/akcija/bebi-posteljina-meda-sa-ogradicom-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-plava",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-plava",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-plava",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zelena",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zelena",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zelena",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zelena",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zuti",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zuti",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zuti",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bela",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bela-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bez",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bez",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bez",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bez",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-bez",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-bez-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zuta",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zuta",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zuta",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-zuta",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-roze",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-roze-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-lila",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-lila",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-lila",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        destination: "/program-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/nepromocivi-carsaf-za-krevetac-lila",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/tetra-pelena-zvezda",
        destination: "/zvezda-vs-partizan/tetra-pelena-zvezda",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/tetra-pelena-zvezda",
        destination: "/zvezda-vs-partizan/bebi-program/tetra-pelena-zvezda",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/tetra-pelena-zvezda",
        destination: "/zvezda-vs-partizan/bebi-program/tetra-pelena-zvezda",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/pelene/tetra-pelena-zvezda",
        destination: "/zvezda-vs-partizan/tetra-pelena-zvezda",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/pelene/tetra-pelena-zvezda",
        destination: "/zvezda-vs-partizan/bebi-program/tetra-pelena-zvezda",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/tetra-pelena-zvezda",
        destination: "/zvezda-vs-partizan/tetra-pelena-zvezda",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/tetra-pelena-partizan",
        destination: "/zvezda-vs-partizan/tetra-pelena-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/tetra-pelena-partizan",
        destination: "/zvezda-vs-partizan/bebi-program/tetra-pelena-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/tetra-pelena-partizan",
        destination: "/zvezda-vs-partizan/bebi-program/tetra-pelena-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/pelene/tetra-pelena-partizan",
        destination: "/zvezda-vs-partizan/tetra-pelena-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/pelene/tetra-pelena-partizan",
        destination: "/zvezda-vs-partizan/bebi-program/tetra-pelena-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/tetra-pelena-partizan",
        destination: "/zvezda-vs-partizan/tetra-pelena-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/torba-meda-roze",
        destination: "/outlet/torba-meda-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/torbe-i-korpe-nosiljke/torba-meda-roze",
        destination: "/outlet/torba-meda-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/torba-meda-roze",
        destination: "/outlet/torba-meda-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/torba-meda-roze",
        destination: "/outlet/torba-meda-roze",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/torba-sa-pvc-dodatkom-sanjalica-teget",
        destination: "/outlet/torba-sa-pvc-dodatkom-sanjalica-teget",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/torbe-i-korpe-nosiljke/torba-sa-pvc-dodatkom-sanjalica-teget",
        destination: "/outlet/torba-sa-pvc-dodatkom-sanjalica-teget",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/torba-sa-pvc-dodatkom-sanjalica-teget",
        destination: "/outlet/torba-sa-pvc-dodatkom-sanjalica-teget",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/torba-sa-pvc-dodatkom-sanjalica-teget",
        destination: "/outlet/torba-sa-pvc-dodatkom-sanjalica-teget",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bebi-peskir-sa-kapuljacom-partizan",
        destination: "/zvezda-vs-partizan/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bebi-peskir-sa-kapuljacom-partizan",
        destination:
          "/zvezda-vs-partizan/kupatilo/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-peskir-sa-kapuljacom-partizan",
        destination:
          "/zvezda-vs-partizan/kupatilo/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/peskiri-i-bademantili/bebi-peskir-sa-kapuljacom-partizan",
        destination: "/zvezda-vs-partizan/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/peskiri-i-bademantili/bebi-peskir-sa-kapuljacom-partizan",
        destination:
          "/zvezda-vs-partizan/kupatilo/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/bebi-program/bebi-peskir-sa-kapuljacom-partizan",
        destination: "/zvezda-vs-partizan/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/bebi-program/bebi-peskir-sa-kapuljacom-partizan",
        destination:
          "/zvezda-vs-partizan/kupatilo/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/kupatilo/bebi-peskir-sa-kapuljacom-partizan",
        destination: "/zvezda-vs-partizan/bebi-peskir-sa-kapuljacom-partizan",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljina-basket",
        destination: "/program-za-decu/posteljine-za-decu/posteljina-basket",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/posteljina-basket",
        destination: "/program-za-decu/posteljina-basket",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/posteljina-basket",
        destination: "/program-za-decu/posteljine-za-decu/posteljina-basket",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/vodootporna-jogi-navlaka-za-krevetac",
        destination: "/program-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/vodootporna-jogi-navlaka-za-krevetac",
        destination: "/program-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/vodootporna-jogi-navlaka-za-krevetac",
        destination: "/program-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        destination: "/program-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        destination:
          "/program-za-bebe/posteljine-za-bebe/dodaci/vodootporna-jogi-navlaka-za-krevetac",
        permanent: true,
        statusCode: 301,
      },

      {
        source: "/program-za-decu/posteljina-fudbal",
        destination: "/program-za-decu/posteljine-za-decu/posteljina-fudbal",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/posteljina-fudbal",
        destination: "/program-za-decu/posteljina-fudbal",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/posteljina-fudbal",
        destination: "/program-za-decu/posteljine-za-decu/posteljina-fudbal",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/set-peskira-duet",
        destination: "/tekstil-za-kupatilo/set-peskira-duet-3",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/set-peskira-duet",
        destination: "/tekstil-za-kupatilo/setovi-peskira/set-peskira-duet-3",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/setovi-peskira/set-peskira-duet",
        destination: "/tekstil-za-kupatilo/set-peskira-duet-3",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/setovi-peskira/set-peskira-duet",
        destination: "/tekstil-za-kupatilo/setovi-peskira/set-peskira-duet-3",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-9127-200x200-sa",
        destination: "/spavaca-soba/posteljina-od-pamucnog-sifona-9127-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-9127-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-9127-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-9127-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-9127-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-9127-200x200-sa",
        destination: "/spavaca-soba/posteljina-od-pamucnog-sifona-9127-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-9127-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-9127-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-9127-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-9127-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-9127-60x80",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-9127-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-9127-60x80",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-9127-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-9127-60x80",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-9127-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-9127-60x80",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-9127-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-9127-60x80",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-9127-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-9127-60x80",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-9127-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/stolnjaci/stolnjak-karmen-166-braon",
        destination: "/kuhinja-i-basta/stolnjak-karmen-166-braon",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/stolnjaci/stolnjak-karmen-166-braon",
        destination: "/kuhinja-i-basta/stolnjaci/stolnjak-karmen-166-braon",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/stolnjak-karmen-sivi-140x200",
        destination: "/kuhinja-i-basta/stolnjaci/stolnjak-karmen-sivi-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/stolnjaci/stolnjak-karmen-sivi-140x200",
        destination: "/kuhinja-i-basta/stolnjak-karmen-sivi-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/stolnjaci/stolnjak-karmen-sivi-140x200",
        destination: "/kuhinja-i-basta/stolnjaci/stolnjak-karmen-sivi-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/ukrasni-jastucic-partizan-karo",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-karo",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/ukrasni-jastucic-partizan-karo",
        destination:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-karo",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-karo",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-karo",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-karo",
        destination:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-karo",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-pruga",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-pruga",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-pruga",
        destination:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-pruga",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-pruga",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-pruga",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-retro",
        destination:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-retro",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-retro",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-retro",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-retro",
        destination:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-retro",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-retro",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-retro",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-talas",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-talas",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastucic-partizan-talas",
        destination:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-talas",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/ukrasni-jastuci/ukrasni-jastucic-partizan-talas",
        destination: "/zvezda-vs-partizan/ukrasni-jastucic-partizan-talas",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-satena-1290-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-satena-1290-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-satena-1290-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-satena-1290-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-satena-1290-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-od-pamucnog-satena-1290-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-pamucnog-satena-1290-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-satena-1290-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-pamucnog-satena-1290-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-satena-1290-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-pamucnog-satena-1290-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-od-pamucnog-satena-1290-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-1297-l-50x70",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-1297-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-1297-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-1297-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-1297-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-1297-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-1297-l-50x70",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-1297-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-1297-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-1297-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-1297-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-1297-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-1296-l-50x70",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-1296-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-1296-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-1296-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-1296-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-1296-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-1296-l-50x70",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-1296-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-1296-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-1296-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-1296-l-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-1296-l-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-1290-40x60",
        destination: "/spavaca-soba/jastucnica-saten-1290-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-1290-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-saten-1290-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-1290-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-saten-1290-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-1290-40x60",
        destination: "/spavaca-soba/jastucnica-saten-1290-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-1290-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-saten-1290-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-1290-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-saten-1290-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamcni-sifon-1300-40x60",
        destination: "/spavaca-soba/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamcni-sifon-1300-40x60",
        destination: "/spavaca-soba/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/outlet/jastucnica-pamcni-sifon-1300-40x60",
        destination: "/spavaca-soba/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/outlet/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/outlet/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/jastucnica-pamcni-sifon-1300-40x60",
        destination: "/spavaca-soba/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/jastucnica-pamcni-sifon-1300-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamcni-sifon-1300-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-9123-50x70",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-9123-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-9123-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-9123-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-pamucni-sifon-9123-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-9123-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-9123-50x70",
        destination: "/spavaca-soba/jastucnica-pamucni-sifon-9123-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-9123-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-pamucni-sifon-9123-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-pamucni-sifon-9123-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-pamucni-sifon-9123-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/zastita-za-jastuk-50x70",
        destination: "/spavaca-soba/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/zastita-za-jastuk-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/zastita-za-jastuk-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/zastite-za-dusek/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/zastita-za-jastuk-50x70",
        destination: "/spavaca-soba/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/zastita-za-jastuk-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/zastita-za-jastuk-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/zastite-za-dusek/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/zastita-za-jastuk-50x70",
        destination: "/spavaca-soba/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/zastita-za-jastuk-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/zastite-za-dusek/zastita-za-jastuk-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/zastite-za-dusek/zastita-za-jastuk-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskir-400gr-m2-sivi-30x50",
        destination: "/tekstil-za-kupatilo/peskir-400grm2-sivi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskir-400gr-m2-sivi-30x50",
        destination: "/tekstil-za-kupatilo/peskiri/peskir-400grm2-sivi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/peskir-400gr-m2-sivi-30x50",
        destination: "/tekstil-za-kupatilo/peskir-400grm2-sivi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/peskir-400gr-m2-sivi-30x50",
        destination: "/tekstil-za-kupatilo/peskiri/peskir-400grm2-sivi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1292",
        destination: "/spavaca-soba/dekorativni-jastuk-1292",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1292",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1292",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1292",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/dekorativni-jastuk-1292",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1292",
        destination: "/spavaca-soba/dekorativni-jastuk-1292",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1292",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1292",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1292",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/dekorativni-jastuk-1292",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1290",
        destination: "/spavaca-soba/dekorativni-jastuk-1290",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1290",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1290",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1290",
        destination: "/spavaca-soba/dekorativni-jastuk-1290",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1290",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1290",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1296",
        destination: "/program-za-decu/dekorativni-jastuk-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1296",
        destination:
          "/program-za-decu/ukrasni-jastucici/dekorativni-jastuk-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1296",
        destination: "/program-za-decu/dekorativni-jastuk-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1296",
        destination:
          "/program-za-decu/ukrasni-jastucici/dekorativni-jastuk-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/ukrasni-jastucici/dekorativni-jastuk-1296",
        destination: "/program-za-decu/dekorativni-jastuk-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1297",
        destination: "/program-za-decu/dekorativni-jastuk-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1297",
        destination:
          "/program-za-decu/ukrasni-jastucici/dekorativni-jastuk-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1297",
        destination: "/program-za-decu/dekorativni-jastuk-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1297",
        destination:
          "/program-za-decu/ukrasni-jastucici/dekorativni-jastuk-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/ukrasni-jastucici/dekorativni-jastuk-1297",
        destination: "/program-za-decu/dekorativni-jastuk-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jogi-navlaka-sifon-roze-90x200",
        destination: "/spavaca-soba/jogi-navlaka-sifon-roze-90x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jogi-navlaka-sifon-roze-90x200",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jogi-navlaka-sifon-roze-90x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jogi-navlaka-sifon-roze-90x200",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/carsafi-sa-lastisem/jogi-navlaka-sifon-roze-90x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jogi-navlake/jogi-navlaka-sifon-roze-90x200",
        destination: "/spavaca-soba/jogi-navlaka-sifon-roze-90x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jogi-navlake/jogi-navlaka-sifon-roze-90x200",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jogi-navlaka-sifon-roze-90x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jogi-navlake/jogi-navlaka-sifon-roze-90x200",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/carsafi-sa-lastisem/jogi-navlaka-sifon-roze-90x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/punilo-za-jastuk-40x40",
        destination: "/spavaca-soba/punilo-za-jastuk",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/punilo-za-jastuk-40x40",
        destination: "/spavaca-soba/jastuci/punilo-za-jastuk",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/punilo-za-jastuk-40x40",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/punilo-za-jastuk",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/punilo-za-jastuk-40x40",
        destination: "/spavaca-soba/punilo-za-jastuk",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/punilo-za-jastuk-40x40",
        destination: "/spavaca-soba/jastuci/punilo-za-jastuk",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/punilo-za-jastuk-40x40",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/punilo-za-jastuk",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-damast-140x220",
        destination: "/spavaca-soba/krevetski-carsaf-damast-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-damast-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-damast-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-damast-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-damast-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-damast-140x220",
        destination: "/spavaca-soba/krevetski-carsaf-damast-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-damast-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-damast-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-damast-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-damast-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        destination:
          "/spavaca-soba/krevetski-carsaf-pamucni-sifon-9123-200x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-pamucni-sifon-9123-200x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        destination:
          "/spavaca-soba/krevetski-carsaf-pamucni-sifon-9123-200x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-pamucni-sifon-9123-200x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-pamucni-sifon-9123-200x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prostirke-za-namestaj/prostirka-za-namestaj-siva-set",
        destination: "/spavaca-soba/prostirka-za-namestaj-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prostirke-za-namestaj/prostirka-za-namestaj-siva-set",
        destination:
          "/spavaca-soba/prostirke-za-namestaj/prostirka-za-namestaj-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/step-deka-frotir-1296",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/step-deka-frotir-1296",
        destination: "/program-za-decu/step-deka-frotir-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/step-deka-frotir-1296",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-1296",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/step-deka-frotir-1304",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/step-deka-frotir-1304",
        destination: "/program-za-decu/step-deka-frotir-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/step-deka-frotir-1304",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/step-deka-frotir-1297",
        destination: "/program-za-decu/step-deka-frotir-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/step-deka-frotir-1297",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/garnitura-sa-pokrivacem-1304",
        destination:
          "/program-za-decu/prekrivaci-za-decu/garnitura-sa-pokrivacem-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/garnitura-sa-pokrivacem-1304",
        destination: "/program-za-decu/garnitura-sa-pokrivacem-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/garnitura-sa-pokrivacem-1304",
        destination:
          "/program-za-decu/prekrivaci-za-decu/garnitura-sa-pokrivacem-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/garnitura-sa-pokrivacem-1304",
        destination: "/program-za-decu/garnitura-sa-pokrivacem-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/garnitura-sa-pokrivacem-1304",
        destination:
          "/program-za-decu/prekrivaci-za-decu/garnitura-sa-pokrivacem-1304",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/posteljina-damast-pruga-140x200-sa",
        destination: "/spavaca-soba/posteljina-damast-pruga-140x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/posteljina-damast-pruga-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-damast-pruga-140x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/posteljina-damast-pruga-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/damast-posteljina/posteljina-damast-pruga-140x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-140x200-sa",
        destination: "/spavaca-soba/posteljina-damast-pruga-140x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-damast-pruga-140x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/damast-posteljina/posteljina-damast-pruga-140x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-saten-1290-200x200",
        destination: "/spavaca-soba/pokrivac-saten-1290-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-saten-1290-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-saten-1290-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-saten-1290-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/saten-prekrivaci-za-krevet/pokrivac-saten-1290-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/saten-pokrivaci/pokrivac-saten-1290-200x200",
        destination: "/spavaca-soba/pokrivac-saten-1290-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/saten-pokrivaci/pokrivac-saten-1290-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-saten-1290-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/saten-pokrivaci/pokrivac-saten-1290-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/saten-prekrivaci-za-krevet/pokrivac-saten-1290-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona-1297",
        destination: "/program-za-decu/posteljina-od-pamucnog-sifona-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona-1297",
        destination:
          "/program-za-decu/posteljine-za-decu/posteljina-od-pamucnog-sifona-1297",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljina-od-pamucnog-sifona-1311",
        destination:
          "/program-za-decu/posteljine-za-decu/posteljina-od-pamucnog-sifona-1311",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona-1311",
        destination: "/program-za-decu/posteljina-od-pamucnog-sifona-1311",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona-1311",
        destination:
          "/program-za-decu/posteljine-za-decu/posteljina-od-pamucnog-sifona-1311",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/antialergijski-jorgan-200x200",
        destination: "/spavaca-soba/antialergijski-jorgan-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/antialergijski-jorgan-200x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/antialergijski-jorgan-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/antialergijski-jorgan-200x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/antialergijski-jorgan/antialergijski-jorgan-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/antialergijski/antialergijski-jorgan-200x200",
        destination: "/spavaca-soba/antialergijski-jorgan-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/antialergijski/antialergijski-jorgan-200x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/antialergijski-jorgan-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/antialergijski/antialergijski-jorgan-200x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/antialergijski-jorgan/antialergijski-jorgan-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prostirke-za-namestaj/prostirka-za-namestaj-tamno-braon-66x150",
        destination: "/spavaca-soba/prostirka-za-namestaj-tamno-braon-66x150",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prostirke-za-namestaj/prostirka-za-namestaj-bez-66x150",
        destination: "/spavaca-soba/prostirka-za-namestaj-bez-66x150",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prostirke-za-namestaj/prostirka-za-namestaj-bez-66x200",
        destination: "/spavaca-soba/prostirka-za-namestaj-bez-66x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prostirke-za-namestaj/prostirka-za-namestaj-bez-66x250",
        destination: "/spavaca-soba/prostirka-za-namestaj-bez-66x250",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-pruga-60x80",
        destination: "/outlet/jastucnica-damast-pruga-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-pruga-60x80",
        destination: "/outlet/jastucnica-damast-pruga-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/jastucnica-damast-pruga-60x80",
        destination: "/outlet/jastucnica-damast-pruga-60x80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-pruga-50x70",
        destination: "/outlet/jastucnica-damast-pruga-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-pruga-50x70",
        destination: "/outlet/jastucnica-damast-pruga-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/jastucnica-damast-pruga-50x70",
        destination: "/outlet/jastucnica-damast-pruga-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/jastucnica-damast-pruga-40x60",
        destination: "/outlet/jastucnica-damast-pruga-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-pruga-40x60",
        destination: "/outlet/jastucnica-damast-pruga-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/jastucnica-damast-pruga-40x60",
        destination: "/outlet/jastucnica-damast-pruga-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/peskir-400g-m2-plava-30x50",
        destination: "/tekstil-za-kupatilo/peskir-400gm2-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/peskir-400g-m2-plava-30x50",
        destination: "/tekstil-za-kupatilo/peskiri/peskir-400gm2-plava",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/peskir-400g-m2-pesak-30x50",
        destination: "/tekstil-za-kupatilo/peskir-400gm2-pesak-30x50",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/peskir-400g-m2-pesak-30x50",
        destination: "/tekstil-za-kupatilo/peskiri/peskir-400gm2-pesak-30x50",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-mickey",
        destination: "/program-za-decu/jastucnica-mickey",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-mickey",
        destination: "/program-za-decu/posteljine-za-decu/jastucnica-mickey",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/jastucnica-mickey",
        destination: "/program-za-decu/jastucnica-mickey",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/jastucnica-mickey",
        destination: "/program-za-decu/posteljine-za-decu/jastucnica-mickey",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-saten-beli-140x220",
        destination:
          "/spavaca-soba/krevetski-carsaf-pamucni-saten-beli-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-saten-beli-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-pamucni-saten-beli-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-saten-beli-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-pamucni-saten-beli-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-pamucni-saten-beli-140x220",
        destination:
          "/spavaca-soba/krevetski-carsaf-pamucni-saten-beli-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-pamucni-saten-beli-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-pamucni-saten-beli-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsafi/krevetski-carsaf-pamucni-saten-beli-140x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-pamucni-saten-beli-140x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bademantil-crvena-zvezda-6",
        destination: "/zvezda-vs-partizan/kupatilo/bademantil-crvena-zvezda-6",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/kupatilo/bademantil-crvena-zvezda-6",
        destination: "/zvezda-vs-partizan/bademantil-crvena-zvezda-6",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-mikrofiber-18-160x200",
        destination: "/spavaca-soba/pokrivac-mikrofiber-18-160x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-mikrofiber-18-160x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-mikrofiber-18-160x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-mikrofiber-18-160x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/mikrofiber-pokrivaci-i-prekrivaci/pokrivac-mikrofiber-18-160x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/mikrofiber/pokrivac-mikrofiber-18-160x200",
        destination: "/spavaca-soba/pokrivac-mikrofiber-18-160x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/mikrofiber/pokrivac-mikrofiber-18-160x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-mikrofiber-18-160x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/mikrofiber/pokrivac-mikrofiber-18-160x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/mikrofiber-pokrivaci-i-prekrivaci/pokrivac-mikrofiber-18-160x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-bela-50x70",
        destination: "/spavaca-soba/jastucnica-saten-bela-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-bela-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-saten-bela-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-bela-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-saten-bela-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-bela-50x70",
        destination: "/spavaca-soba/jastucnica-saten-bela-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-bela-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-saten-bela-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-bela-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-saten-bela-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/mikrofiber/univerzalni-jorgan-mikrofiber-beli-140x200",
        destination: "/spavaca-soba/univerzalni-jorgan-mikrofiber-beli-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/mikrofiber/univerzalni-jorgan-mikrofiber-beli-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/univerzalni-jorgan-mikrofiber-beli-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/mikrofiber/univerzalni-jorgan-mikrofiber-beli-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-za-cetiri-godisnja-doba/univerzalni-jorgan-mikrofiber-beli-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/univerzalni/univerzalni-jorgan-mikrofiber-beli-140x200",
        destination: "/spavaca-soba/univerzalni-jorgan-mikrofiber-beli-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/univerzalni/univerzalni-jorgan-mikrofiber-beli-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/univerzalni-jorgan-mikrofiber-beli-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/jorgani/univerzalni/univerzalni-jorgan-mikrofiber-beli-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-za-cetiri-godisnja-doba/univerzalni-jorgan-mikrofiber-beli-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-spamucnog-satena-bez-140x200-sa",
        destination: "/spavaca-soba/posteljina-od-pamucnog-satena-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-spamucnog-satena-bez-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-satena-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-spamucnog-satena-bez-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-od-pamucnog-satena-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-spamucnog-satena-bez-140x200-sa",
        destination: "/spavaca-soba/posteljina-od-pamucnog-satena-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-spamucnog-satena-bez-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-satena-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-spamucnog-satena-bez-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-od-pamucnog-satena-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tweety-lbl",
        destination: "/warner-bros/ukrasni-jastuk-tweety-lbl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tweety-lbl",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-lbl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-lbl",
        destination: "/warner-bros/ukrasni-jastuk-tweety-lbl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tweety-lbl",
        destination: "/warner-bros/ukrasni-jastuk-tweety-lbl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tweety-lbl",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-lbl",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tweety-roze-srce",
        destination: "/warner-bros/ukrasni-jastuk-tweety-roze-srce",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tweety-roze-srce",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-roze-srce",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tweety-roze-srce",
        destination: "/warner-bros/ukrasni-jastuk-tweety-roze-srce",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tweety-roze-srce",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-roze-srce",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tweety-snuggle",
        destination: "/warner-bros/ukrasni-jastuk-tweety-snuggle",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tweety-snuggle",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-snuggle",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/ukrasni-jastuk-tweety-snuggle",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-snuggle",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-snuggle",
        destination: "/warner-bros/ukrasni-jastuk-tweety-snuggle",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tweety-snuggle",
        destination: "/warner-bros/ukrasni-jastuk-tweety-snuggle",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tweety-snuggle",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tweety-snuggle",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-dusko-crveni",
        destination: "/warner-bros/ukrasni-jastuk-dusko-crveni",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-dusko-crveni",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-dusko-crveni",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/ukrasni-jastuk-dusko-crveni",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-dusko-crveni",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-dusko-crveni",
        destination: "/warner-bros/ukrasni-jastuk-dusko-crveni",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-dusko-crveni",
        destination: "/warner-bros/ukrasni-jastuk-dusko-crveni",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-dusko-crveni",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-dusko-crveni",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-silvester-i-tweety",
        destination: "/warner-bros/ukrasni-jastuk-silvester-i-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-silvester-i-tweety",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-silvester-i-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-silvester-i-tweety",
        destination: "/warner-bros/ukrasni-jastuk-silvester-i-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-silvester-i-tweety",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-silvester-i-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tom-jerry-zuti",
        destination: "/warner-bros/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/ukrasni-jastucici/ukrasni-jastuk-tom-jerry-zuti",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/ukrasni-jastuk-tom-jerry-zuti",
        destination: "/warner-bros/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/ukrasni-jastuk-tom-jerry-zuti",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tom-jerry-zuti",
        destination: "/warner-bros/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tom-jerry-zuti",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tom-jerry-zuti",
        destination: "/warner-bros/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/ukrasni-jastuk-tom-jerry-zuti",
        destination:
          "/warner-bros/dekorativni-jastucici/ukrasni-jastuk-tom-and-jerry-zuti",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-looney",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljina-sa-ogradicom-looney",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-looney",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-looney",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-looney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljina-sa-ogradicom-batman",
        destination: "/warner-bros/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljina-sa-ogradicom-batman",
        destination:
          "/warner-bros/posteljina-za-bebe-sa-ogradicom/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-batman",
        destination: "/warner-bros/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-batman",
        destination:
          "/warner-bros/posteljina-za-bebe-sa-ogradicom/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljina-sa-ogradicom-batman",
        destination:
          "/warner-bros/posteljina-za-bebe-sa-ogradicom/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-batman",
        destination: "/warner-bros/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-batman",
        destination:
          "/warner-bros/posteljina-za-bebe-sa-ogradicom/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-batman",
        destination: "/warner-bros/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-batman",
        destination:
          "/warner-bros/posteljina-za-bebe-sa-ogradicom/posteljina-sa-ogradicom-batman",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-tweety",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljina-sa-ogradicom-tweety",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-tweety",
        destination: "/program-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/posteljina-sa-ogradicom-tweety",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-za-krevetac/posteljina-sa-ogradicom-tweety",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/portikla-lonney",
        destination: "/warner-bros/portikla-loonney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/portikla-lonney",
        destination: "/warner-bros/garderoba-za-bebe-i-decu/portikla-loonney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/portikla-lonney",
        destination: "/warner-bros/portikla-loonney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/portikla-lonney",
        destination: "/warner-bros/garderoba-za-bebe-i-decu/portikla-loonney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/portikla-lonney",
        destination: "/warner-bros/portikla-loonney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/portikla-lonney",
        destination: "/warner-bros/garderoba-za-bebe-i-decu/portikla-loonney",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bodi-atlet-lonney-68",
        destination: "/akcija/bodi-atlet-lonney-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/bodi-atlet-lonney-68",
        destination: "/akcija/bodi-atlet-lonney-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-atlet-lonney-68",
        destination: "/akcija/bodi-atlet-lonney-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-atlet-lonney-68",
        destination: "/akcija/bodi-atlet-lonney-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bodi-kratak-rukav-batman-80",
        destination: "/akcija/bodi-kratak-rukav-batman-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bodi-kratak-rukav-batman-80",
        destination: "/akcija/bodi-kratak-rukav-batman-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-kratak-rukav-batman-80",
        destination: "/akcija/bodi-kratak-rukav-batman-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-kratak-rukav-batman-80",
        destination: "/akcija/bodi-kratak-rukav-batman-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-damast-pruga-siva-200x200-sa",
        destination: "/spavaca-soba/posteljina-damast-pruga-siva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-damast-pruga-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-damast-pruga-siva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-damast-pruga-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/damast-posteljina/posteljina-damast-pruga-siva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-siva-200x200-sa",
        destination: "/spavaca-soba/posteljina-damast-pruga-siva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-damast-pruga-siva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/damast-posteljina/posteljina-damast-pruga-siva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/step-deka-sifon-1298-140x200",
        destination: "/spavaca-soba/step-deka-sifon-1298-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/step-deka-sifon-1298-140x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/step-deka-sifon-1298-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/step-deka-sifon-1298-140x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/step-deka-prekrivac-modernog-stepa/step-deka-sifon-1298-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-antialergijski-200x200",
        destination: "/spavaca-soba/pokrivac-antialergijski-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-antialergijski-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-antialergijski-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-antialergijski-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/antialergijski-prekrivac/pokrivac-antialergijski-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/antialergijski/pokrivac-antialergijski-200x200",
        destination: "/spavaca-soba/pokrivac-antialergijski-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/antialergijski/pokrivac-antialergijski-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-antialergijski-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/prekrivaci/antialergijski/pokrivac-antialergijski-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/antialergijski-prekrivac/pokrivac-antialergijski-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/jorgan-naturline-vuna-140x200",
        destination: "/spavaca-soba/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/jorgan-naturline-vuna-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/jorgan-naturline-vuna-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-vuna-naturline/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/naturline/jorgan-naturline-vuna-140x200",
        destination: "/spavaca-soba/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/naturline/jorgan-naturline-vuna-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/naturline/jorgan-naturline-vuna-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgani-vuna-naturline/jorgani-vuna-naturline",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-1291-50x70",
        destination: "/spavaca-soba/jastucnica-saten-1291-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-1291-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-saten-1291-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-saten-1291-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-saten-1291-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-1291-50x70",
        destination: "/spavaca-soba/jastucnica-saten-1291-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-1291-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-saten-1291-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-saten-1291-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-saten-1291-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/dekorativne-jastucnice/dekorativna-jastucnica-linum-2",
        destination: "/spavaca-soba/dekorativna-jastucnica-linum-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bodi-atlet-partizan-56",
        destination: "/zvezda-vs-partizan/bodi-atlet-partizan-56",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bodi-atlet-partizan-56",
        destination: "/zvezda-vs-partizan/bebi-program/bodi-atlet-partizan-56",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bodi-atlet-partizan-56",
        destination: "/zvezda-vs-partizan/bebi-program/bodi-atlet-partizan-56",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/bodi-atlet-partizan-56",
        destination: "/zvezda-vs-partizan/bodi-atlet-partizan-56",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/bodi-atlet-partizan-56",
        destination: "/zvezda-vs-partizan/bebi-program/bodi-atlet-partizan-56",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/bodi-atlet-partizan-56",
        destination: "/zvezda-vs-partizan/bodi-atlet-partizan-56",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/kapa-partizan-srce-42",
        destination: "/zvezda-vs-partizan/kapa-partizan-srce-42",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/kapa-partizan-srce-42",
        destination: "/zvezda-vs-partizan/bebi-program/kapa-partizan-srce-42",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/kapa-partizan-srce-42",
        destination: "/zvezda-vs-partizan/bebi-program/kapa-partizan-srce-42",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/kapa-partizan-srce-42",
        destination: "/zvezda-vs-partizan/kapa-partizan-srce-42",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/kapa-partizan-srce-42",
        destination: "/zvezda-vs-partizan/bebi-program/kapa-partizan-srce-42",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/kapa-partizan-srce-42",
        destination: "/zvezda-vs-partizan/kapa-partizan-srce-42",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/bebi-program/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/bebi-program/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/bebi-program/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/komplet-partizan-74",
        destination: "/zvezda-vs-partizan/bebi-program/komplet-partizan-74-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/komplet-crvena-zvezda-98",
        destination: "/zvezda-vs-partizan/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/komplet-crvena-zvezda-98",
        destination:
          "/zvezda-vs-partizan/bebi-program/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/komplet-crvena-zvezda-98",
        destination: "/zvezda-vs-partizan/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/komplet-crvena-zvezda-98",
        destination:
          "/zvezda-vs-partizan/bebi-program/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/komplet-crvena-zvezda-98",
        destination: "/zvezda-vs-partizan/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/komplet-crvena-zvezda-98",
        destination:
          "/zvezda-vs-partizan/bebi-program/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/komplet-crvena-zvezda-98",
        destination: "/zvezda-vs-partizan/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/komplet-crvena-zvezda-98",
        destination:
          "/zvezda-vs-partizan/bebi-program/komplet-crvena-zvezda-98-2",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona",
        destination: "/program-za-decu/posteljina-od-pamucnog-sifona",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona",
        destination:
          "/program-za-decu/posteljine-za-decu/posteljina-od-pamucnog-sifona",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/garnitura-sa-pokrivacem-1311",
        destination: "/program-za-decu/garnitura-sa-pokrivacem-1311",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/garnitura-sa-pokrivacem-1311",
        destination:
          "/program-za-decu/prekrivaci-za-decu/garnitura-sa-pokrivacem-1311",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1315",
        destination: "/spavaca-soba/dekorativni-jastuk-1315",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1315",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1315",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1315",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/dekorativni-jastuk-1315",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1315",
        destination: "/spavaca-soba/dekorativni-jastuk-1315",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1315",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1315",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1315",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/dekorativni-jastuk-1315",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1313",
        destination: "/spavaca-soba/dekorativni-jastuk-1313",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1313",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1313",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni-jastuk-1313",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/dekorativni-jastuk-1313",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1313",
        destination: "/spavaca-soba/dekorativni-jastuk-1313",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1313",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuk-1313",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jastuci/dekorativni/dekorativni-jastuk-1313",
        destination:
          "/spavaca-soba/jastuci/dekorativni-jastuci/dekorativni-jastuk-1313",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-satena-braon-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-satena-braon-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-satena-braon-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-satena-braon-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-satena-braon-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-od-pamucnog-satena-braon-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-pamucnog-satena-braon-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-satena-braon-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-pamucnog-satena-braon-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-satena-braon-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-od-pamucnog-satena-braon-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-od-pamucnog-satena-braon-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-damast-pruga-5mm-bela-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-damast-pruga-5mm-bela-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-damast-pruga-5mm-bela-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-damast-pruga-5mm-bela-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-damast-pruga-5mm-bela-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/damast-posteljina/posteljina-damast-pruga-5mm-bela-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-5mm-bela-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-damast-pruga-5mm-bela-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-5mm-bela-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-damast-pruga-5mm-bela-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/damast/posteljina-damast-pruga-5mm-bela-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/damast-posteljina/posteljina-damast-pruga-5mm-bela-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/posteljina-vintage-s-siva-200x200-sa",
        destination: "/spavaca-soba/posteljina-vintage-ssiva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/posteljina-vintage-s-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-vintage-ssiva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljine/posteljina-vintage-s-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-vintage-ssiva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-vintage-s-siva-200x200-sa",
        destination: "/spavaca-soba/posteljina-vintage-ssiva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-vintage-s-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-vintage-ssiva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-vintage-s-siva-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-vintage-ssiva-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/bodi-dug-rukav-batman-74",
        destination: "/warner-bros/bodi-dug-rukav-batman-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/bodi-dug-rukav-batman-74",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-dug-rukav-batman-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-dug-rukav-batman-74",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-dug-rukav-batman-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-dug-rukav-batman-74",
        destination: "/warner-bros/bodi-dug-rukav-batman-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-dug-rukav-batman-74",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-dug-rukav-batman-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bodi-dug-rukav-looney-tunes-21-80",
        destination: "/akcija/bodi-dug-rukav-looney-tunes-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bodi-dug-rukav-looney-tunes-21-80",
        destination: "/akcija/bodi-dug-rukav-looney-tunes-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-dug-rukav-looney-tunes-21-80",
        destination: "/akcija/bodi-dug-rukav-looney-tunes-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/garderoba-za-bebe/bodi-dug-rukav-looney-tunes-21-80",
        destination: "/akcija/bodi-dug-rukav-looney-tunes-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bodi-dug-rukav-tweety-21-74",
        destination: "/warner-bros/bodi-dug-rukav-tweety-21-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/bodi-dug-rukav-tweety-21-74",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-dug-rukav-tweety-21-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bodi-dug-rukav-tweety-21-74",
        destination: "/warner-bros/bodi-dug-rukav-tweety-21-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bodi-dug-rukav-tweety-21-74",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-dug-rukav-tweety-21-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-dug-rukav-tweety-21-74",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-dug-rukav-tweety-21-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-dug-rukav-tweety-21-74",
        destination: "/warner-bros/bodi-dug-rukav-tweety-21-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-dug-rukav-tweety-21-74",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-dug-rukav-tweety-21-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/trenerka-batman-21-80",
        destination: "/akcija/trenerka-batman-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/trenerka-batman-21-80",
        destination: "/akcija/trenerka-batman-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/trenerka-batman-21-80",
        destination: "/akcija/trenerka-batman-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/trenerka-batman-21-80",
        destination: "/akcija/trenerka-batman-21-80",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/benka-dug-rukav-zvezda-zvezdas-98",
        destination: "/zvezda-vs-partizan/benka-dug-rukav-zvezda-zvezdas-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/benka-dug-rukav-zvezda-zvezdas-98",
        destination:
          "/zvezda-vs-partizan/bebi-program/benka-dug-rukav-zvezda-zvezdas-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/bebi-program/benka-dug-rukav-zvezda-zvezdas-98",
        destination: "/zvezda-vs-partizan/benka-dug-rukav-zvezda-zvezdas-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        destination:
          "/zvezda-vs-partizan/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        destination:
          "/zvezda-vs-partizan/bebi-program/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/garderoba-za-bebe/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        destination:
          "/zvezda-vs-partizan/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/garderoba-za-bebe/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        destination:
          "/zvezda-vs-partizan/bebi-program/benka-dug-rukav-crvena-zvezda-moja-zvezda-74",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-50x70",
        destination: "/spavaca-soba/jastucnica-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-50x70",
        destination: "/spavaca-soba/jastucnica-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-stampani-sifon-1318-40x60",
        destination: "/spavaca-soba/jastucnica-stampani-sifon-1318-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-stampani-sifon-1318-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-stampani-sifon-1318-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnica-stampani-sifon-1318-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-stampani-sifon-1318-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-stampani-sifon-1318-40x60",
        destination: "/spavaca-soba/jastucnica-stampani-sifon-1318-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-stampani-sifon-1318-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-stampani-sifon-1318-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-stampani-sifon-1318-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-stampani-sifon-1318-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-sifon-1314-160x220",
        destination:
          "/spavaca-soba/krevetski-carsaf-pamucni-sifon-1314-160x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-sifon-1314-160x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-pamucni-sifon-1314-160x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/krevetski-carsaf-pamucni-sifon-1314-160x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-pamucni-sifon-1314-160x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jogi-navlake/krevetski-carsaf-pamucni-sifon-1314-160x220",
        destination:
          "/spavaca-soba/krevetski-carsaf-pamucni-sifon-1314-160x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jogi-navlake/krevetski-carsaf-pamucni-sifon-1314-160x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsaf-pamucni-sifon-1314-160x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jogi-navlake/krevetski-carsaf-pamucni-sifon-1314-160x220",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/krevetski-carsafi/krevetski-carsaf-pamucni-sifon-1314-160x220",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-lila-50x70",
        destination: "/spavaca-soba/jastucnica-damast-lila-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-lila-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-damast-lila-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-lila-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-damast-lila-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-lila-50x70",
        destination: "/spavaca-soba/jastucnica-damast-lila-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-lila-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-damast-lila-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-lila-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-damast-lila-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-pesak-40x60",
        destination: "/spavaca-soba/jastucnica-damast-pesak-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-pesak-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-damast-pesak-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-pesak-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-damast-pesak-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-pesak-40x60",
        destination: "/spavaca-soba/jastucnica-damast-pesak-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-pesak-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-damast-pesak-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljni-delovi/jastucnice/jastucnica-damast-pesak-40x60",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-damast-pesak-40x60",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bebi-zeka-dug-rukav-crvena-zvezda-21-62",
        destination:
          "/zvezda-vs-partizan/bebi-zeka-dug-rukav-crvena-zvezda-21-62",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bebi-zeka-dug-rukav-crvena-zvezda-21-62",
        destination:
          "/zvezda-vs-partizan/bebi-program/bebi-zeka-dug-rukav-crvena-zvezda-21-62",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/zvezda-vs-partizan/bebi-program/bebi-zeka-dug-rukav-crvena-zvezda-21-62",
        destination:
          "/zvezda-vs-partizan/bebi-zeka-dug-rukav-crvena-zvezda-21-62",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/zeka-atlet-crvena-zvezda-62",
        destination: "/zvezda-vs-partizan/zeka-atlet-crvena-zvezda-62",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/zeka-atlet-crvena-zvezda-62",
        destination:
          "/zvezda-vs-partizan/bebi-program/zeka-atlet-crvena-zvezda-62",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/zvezda-vs-partizan/bebi-program/zeka-atlet-crvena-zvezda-62",
        destination: "/zvezda-vs-partizan/zeka-atlet-crvena-zvezda-62",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kuhinjski-set-lale",
        destination: "/kuhinja-i-basta/kuhinjski-set-lale",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kuhinjski-set-lale",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-lale",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjski-set-lale",
        destination: "/kuhinja-i-basta/kuhinjski-set-lale",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjski-set-lale",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-lale",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/kuhinjski-set-lale",
        destination: "/kuhinja-i-basta/kuhinjski-set-lale",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/kuhinjski-set-lale",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-lale",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/kuhinjski-set-limun",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-limun",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kuhinjski-set-limun",
        destination: "/kuhinja-i-basta/kuhinjski-set-limun",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kuhinjski-set-limun",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-limun",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjski-set-limun",
        destination: "/kuhinja-i-basta/kuhinjski-set-limun",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjski-set-limun",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-limun",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/kuhinjski-set-limun",
        destination: "/kuhinja-i-basta/kuhinjski-set-limun",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/kuhinjski-set-limun",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-limun",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/kuhinjska-krpa-66b",
        destination: "/kuhinja-i-basta/kuhinjske-krpe/kuhinjska-krpa-66b",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/kuhinjska-krpa-66b",
        destination: "/kuhinja-i-basta/kuhinjska-krpa-66b",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/kuhinjska-krpa-66b",
        destination: "/kuhinja-i-basta/kuhinjske-krpe/kuhinjska-krpa-66b",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/kuhinjski-set-65",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-65",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjski-set-65",
        destination: "/kuhinja-i-basta/kuhinjski-set-65",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjski-set-65",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjski-set-65",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjska-krpa-set-410",
        destination: "/kuhinja-i-basta/kuhinjska-krpa-set-410",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/kuhinjska-krpa-set-410",
        destination: "/kuhinja-i-basta/kuhinjski-setovi/kuhinjska-krpa-set-410",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/kuhinjska-krpa-69-2",
        destination: "/kuhinja-i-basta/kuhinjska-krpa-692",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/kuhinjska-krpa-69-2",
        destination: "/kuhinja-i-basta/kuhinjske-krpe/kuhinjska-krpa-692",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/kuhinjska-krpa-69-2",
        destination: "/kuhinja-i-basta/kuhinjska-krpa-692",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/kuhinjska-krpa-69-2",
        destination: "/kuhinja-i-basta/kuhinjske-krpe/kuhinjska-krpa-692",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/kuhinjska-krpa-69-3",
        destination: "/kuhinja-i-basta/kuhinjska-krpa-693",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/kuhinjska-krpa-69-3",
        destination: "/kuhinja-i-basta/kuhinjske-krpe/kuhinjska-krpa-693",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/kuhinjska-krpa-69-3",
        destination: "/kuhinja-i-basta/kuhinjska-krpa-693",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/kuhinjska-krpa-69-3",
        destination: "/kuhinja-i-basta/kuhinjske-krpe/kuhinjska-krpa-693",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kuhinjski-set-za-devojcice-bez",
        destination: "/kuhinja-i-basta/kuhinjski-set-za-devojcice-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kuhinjski-set-za-devojcice-bez",
        destination: "/kuhinja-i-basta/kecelje/kuhinjski-set-za-devojcice-bez",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-vafl-roze-200x200",
        destination: "/spavaca-soba/pokrivac-vafl-roze-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-vafl-roze-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-vafl-roze-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/pokrivac-vafl-roze-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/frotir-prekrivac/pokrivac-vafl-roze-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/frotir/pokrivac-vafl-roze-200x200",
        destination: "/spavaca-soba/pokrivac-vafl-roze-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/frotir/pokrivac-vafl-roze-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/pokrivac-vafl-roze-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/prekrivaci/frotir/pokrivac-vafl-roze-200x200",
        destination:
          "/spavaca-soba/prekrivaci-kao-izraz-stila/frotir-prekrivac/pokrivac-vafl-roze-200x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bodi-atlet-tomandjerry-22-68",
        destination: "/warner-bros/bodi-atlet-tomjerry-22-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/garderoba-za-bebe/bodi-atlet-tomandjerry-22-68",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-atlet-tomjerry-22-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-atlet-tomandjerry-22-68",
        destination: "/warner-bros/bodi-atlet-tomjerry-22-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-atlet-tomandjerry-22-68",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-atlet-tomjerry-22-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-atlet-tomandjerry-22-68",
        destination: "/warner-bros/bodi-atlet-tomjerry-22-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-atlet-tomandjerry-22-68",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-atlet-tomjerry-22-68",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/bodi-atlet-tweety-22-92",
        destination: "/warner-bros/bodi-atlet-tweety-22-92",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/bodi-atlet-tweety-22-92",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-atlet-tweety-22-92",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/bodi-atlet-tweety-22-92",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-atlet-tweety-22-92",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-atlet-tweety-22-92",
        destination: "/warner-bros/bodi-atlet-tweety-22-92",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/bodi-atlet-tweety-22-92",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/bodi-atlet-tweety-22-92",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/komplet-batman-22-98",
        destination: "/warner-bros/komplet-batman-22-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/komplet-batman-22-98",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/komplet-batman-22-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/komplet-batman-22-98",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/komplet-batman-22-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/komplet-batman-22-98",
        destination: "/warner-bros/komplet-batman-22-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/komplet-batman-22-98",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/komplet-batman-22-98",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/kapica-batman-22-44",
        destination: "/warner-bros/kapica-batman-22-44",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/kapica-batman-22-44",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/kapica-batman-22-44",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/kapica-batman-22-44",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/kapica-batman-22-44",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/kapica-batman-22-44",
        destination: "/warner-bros/kapica-batman-22-44",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/garderoba-za-bebe/kapica-batman-22-44",
        destination:
          "/warner-bros/garderoba-za-bebe-i-decu/kapica-batman-22-44",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/pokrivac-interlok-looney22",
        destination: "/warner-bros/pokrivac-interlok-looney22",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/garderoba-za-bebe/pokrivac-interlok-looney22",
        destination:
          "/warner-bros/prekrivaci-za-bebe-2/pokrivac-interlok-looney22",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/pokrivac-interlok-looney22",
        destination:
          "/warner-bros/prekrivaci-za-bebe-2/pokrivac-interlok-looney22",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/pokrivaci/pokrivac-interlok-looney22",
        destination: "/warner-bros/pokrivac-interlok-looney22",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/pokrivaci/pokrivac-interlok-looney22",
        destination:
          "/warner-bros/prekrivaci-za-bebe-2/pokrivac-interlok-looney22",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/vrece-za-spavanje/vreca-interlok-batman-2022-100cm",
        destination: "/program-za-bebe/vreca-interlok-batman-2022-100cm",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/vrece-za-spavanje/vreca-interlok-batman-2022-100cm",
        destination:
          "/program-za-bebe/vrece-za-spavanje-za-miran-bebeci-san/vreca-interlok-batman-2022-100cm",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/vreca-interlok-batman-2022-100cm",
        destination: "/program-za-bebe/vreca-interlok-batman-2022-100cm",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/vreca-interlok-batman-2022-100cm",
        destination:
          "/program-za-bebe/vrece-za-spavanje-za-miran-bebeci-san/vreca-interlok-batman-2022-100cm",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/vrece-za-spavanje/vreca-interlok-batman-2022-100cm",
        destination: "/program-za-bebe/vreca-interlok-batman-2022-100cm",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/vrece-za-spavanje/vreca-interlok-batman-2022-100cm",
        destination:
          "/program-za-bebe/vrece-za-spavanje-za-miran-bebeci-san/vreca-interlok-batman-2022-100cm",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/vrece-za-spavanje/vreca-interlok-looney-tunes-80cm-80-86",
        destination: "/akcija/vreca-interlok-looney-tunes-80cm80-86",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/warner-bros/vreca-interlok-looney-tunes-80cm-80-86",
        destination: "/akcija/vreca-interlok-looney-tunes-80cm80-86",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/warner-bros/vrece-za-spavanje/vreca-interlok-looney-tunes-80cm-80-86",
        destination: "/akcija/vreca-interlok-looney-tunes-80cm80-86",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja-i-basta/set-kuhinjskih-krpa-petrovci",
        destination:
          "/kuhinja-i-basta/kuhinjski-setovi/set-kuhinjskih-krpa-petrovci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/set-kuhinjskih-krpa-petrovci",
        destination: "/kuhinja-i-basta/set-kuhinjskih-krpa-petrovci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/krpe/set-kuhinjskih-krpa-petrovci",
        destination:
          "/kuhinja-i-basta/kuhinjski-setovi/set-kuhinjskih-krpa-petrovci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/set-kuhinjskih-krpa-petrovci",
        destination: "/kuhinja-i-basta/set-kuhinjskih-krpa-petrovci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/setovi/set-kuhinjskih-krpa-petrovci",
        destination:
          "/kuhinja-i-basta/kuhinjski-setovi/set-kuhinjskih-krpa-petrovci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/set-kuhinjskih-krpa-petrovci",
        destination: "/kuhinja-i-basta/set-kuhinjskih-krpa-petrovci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/set-kuhinjskih-krpa-petrovci",
        destination:
          "/kuhinja-i-basta/kuhinjski-setovi/set-kuhinjskih-krpa-petrovci",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kecelja-crna-122d-crna",
        destination: "/kuhinja-i-basta/kecelja-crna-122d-crna",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kuhinja/kecelje/kecelja-crna-122d-crna",
        destination: "/kuhinja-i-basta/kecelje/kecelja-crna-122d-crna",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/bebi-posteljina-3-1",
        destination: "/program-za-bebe/bebi-posteljina-kamion",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/bebi-posteljina-3-1",
        destination:
          "/program-za-bebe/posteljine-za-bebe/bebi-posteljina-kamion",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/bebi-posteljina-3-1",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-kamion",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-3-1",
        destination: "/program-za-bebe/bebi-posteljina-kamion",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-3-1",
        destination:
          "/program-za-bebe/posteljine-za-bebe/bebi-posteljina-kamion",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-3-1",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-kamion",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/bebi-posteljina-slatki-snovi",
        destination: "/program-za-bebe/bebi-posteljina-slatki-snovi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/bebi-posteljina-slatki-snovi",
        destination:
          "/program-za-bebe/posteljine-za-bebe/bebi-posteljina-slatki-snovi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-bebe/posteljine/bebi-posteljina-slatki-snovi",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-slatki-snovi",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-slatki-snovi",
        destination: "/program-za-bebe/bebi-posteljina-slatki-snovi",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-slatki-snovi",
        destination:
          "/program-za-bebe/posteljine-za-bebe/bebi-posteljina-slatki-snovi",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-bebe/posteljine/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-slatki-snovi",
        destination:
          "/program-za-bebe/posteljine-za-bebe/posteljine-bez-ogradice-i-jastuci-za-bebe/bebi-posteljina-slatki-snovi",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivac-snezana-i-sedam-patuljaka",
        destination:
          "/program-za-decu/step-deka-frotir-snezana-i-sedam-patuljaka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivac-snezana-i-sedam-patuljaka",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-snezana-i-sedam-patuljaka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/pokrivac-snezana-i-sedam-patuljaka",
        destination:
          "/program-za-decu/step-deka-frotir-snezana-i-sedam-patuljaka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/pokrivaci/pokrivac-snezana-i-sedam-patuljaka",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-snezana-i-sedam-patuljaka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/pokrivac-snezana-i-sedam-patuljaka",
        destination:
          "/program-za-decu/step-deka-frotir-snezana-i-sedam-patuljaka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/akcija/pokrivac-snezana-i-sedam-patuljaka",
        destination:
          "/program-za-decu/prekrivaci-za-decu/step-deka-frotir-snezana-i-sedam-patuljaka",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/decija-posteljina-151-1344",
        destination: "/program-za-decu/decija-posteljina-150-1344",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/decija-posteljina-151-1344",
        destination:
          "/program-za-decu/posteljine-za-decu/decija-posteljina-150-1344",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/decija-posteljina-151-1344",
        destination: "/program-za-decu/decija-posteljina-150-1344",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/decija-posteljina-151-1344",
        destination:
          "/program-za-decu/posteljine-za-decu/decija-posteljina-150-1344",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/decija-posteljina-150-1342",
        destination:
          "/program-za-decu/posteljine-za-decu/decija-posteljina-150-1342",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/decija-posteljina-150-1342",
        destination: "/program-za-decu/decija-posteljina-150-1342",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljine/decija-posteljina-150-1342",
        destination:
          "/program-za-decu/posteljine-za-decu/decija-posteljina-150-1342",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/program-za-decu/posteljina-od-pamucnog-sifona-151-1340",
        destination:
          "/program-za-decu/posteljine-za-decu/posteljina-od-pamucnog-sifona-151-1340",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona-151-1340",
        destination: "/program-za-decu/posteljina-od-pamucnog-sifona-151-1340",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/program-za-decu/posteljine/posteljina-od-pamucnog-sifona-151-1340",
        destination:
          "/program-za-decu/posteljine-za-decu/posteljina-od-pamucnog-sifona-151-1340",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-1338-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        destination:
          "/spavaca-soba/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/sifon/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljine-od-pamucnog-sifona/posteljina-od-pamucnog-sifona-1336-160x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        destination:
          "/spavaca-soba/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-pamucni-saten-marsela-bez-200x200-sa",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-pamucni-saten-1332-140x200-sa",
        destination: "/spavaca-soba/posteljina-saten-pamuk-1332-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-pamucni-saten-1332-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-saten-pamuk-1332-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/posteljina-pamucni-saten-1332-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-saten-pamuk-1332-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-pamucni-saten-1332-140x200-sa",
        destination: "/spavaca-soba/posteljina-saten-pamuk-1332-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-pamucni-saten-1332-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/posteljina-saten-pamuk-1332-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source:
          "/spavaca-soba/posteljine/pamucni-saten/posteljina-pamucni-saten-1332-140x200-sa",
        destination:
          "/spavaca-soba/posteljine-uz-koje-koza-dise/satenska-posteljina/posteljina-saten-pamuk-1332-140x200",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/bademantil-636-liska-xl",
        destination: "/tekstil-za-kupatilo/bademantil-636-liska-xl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/bademantil-636-liska-xl",
        destination:
          "/tekstil-za-kupatilo/bademantil-za-udobnost-u-svakom-danu/bademantil-636-liska-xl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/bademantili/bademantil-636-liska-xl",
        destination: "/tekstil-za-kupatilo/bademantil-636-liska-xl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/bademantili/bademantil-636-liska-xl",
        destination:
          "/tekstil-za-kupatilo/bademantil-za-udobnost-u-svakom-danu/bademantil-636-liska-xl",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/lux-peskir-4000790-siva-50x90",
        destination: "/tekstil-za-kupatilo/peskir-lux-50x90-550gsm-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/lux-peskir-4000790-siva-50x90",
        destination:
          "/tekstil-za-kupatilo/peskiri/peskir-lux-50x90-550gsm-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/lux-peskir-4000790-siva-50x90",
        destination: "/tekstil-za-kupatilo/peskir-lux-50x90-550gsm-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/lux-peskir-4000790-siva-50x90",
        destination:
          "/tekstil-za-kupatilo/peskiri/peskir-lux-50x90-550gsm-siva",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/4000790-tamnosiva-70x130",
        destination: "/tekstil-za-kupatilo/4000790-tamnosiva-70x130",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/4000790-tamnosiva-70x130",
        destination: "/tekstil-za-kupatilo/peskiri/4000790-tamnosiva-70x130",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/4000790-tamnosiva-70x130",
        destination: "/tekstil-za-kupatilo/4000790-tamnosiva-70x130",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/kupatilo/peskiri/4000790-tamnosiva-70x130",
        destination: "/tekstil-za-kupatilo/peskiri/4000790-tamnosiva-70x130",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/jorgan-komfor-1337-140x200",
        destination: "/spavaca-soba/jorgan-komfor-1337",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/jorgan-komfor-1337-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgan-komfor-1337",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/jorgan-komfor-1337-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/pamucni-jorgani/jorgan-komfor-1337",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/pamucni/jorgan-komfor-1337-140x200",
        destination: "/spavaca-soba/jorgan-komfor-1337",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/pamucni/jorgan-komfor-1337-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/jorgan-komfor-1337",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/jorgani/pamucni/jorgan-komfor-1337-140x200",
        destination:
          "/spavaca-soba/jorgani-za-pravu-meru-topline-i-udobnosti/pamucni-jorgani/jorgan-komfor-1337",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-mint-50x70",
        destination: "/spavaca-soba/jastucnica-damast-mint-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-mint-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnica-damast-mint-50x70",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/spavaca-soba/posteljni-delovi/jastucnica-damast-mint-50x70",
        destination:
          "/spavaca-soba/posteljni-delovi-za-tvoju-omiljenu-kombinaciju/jastucnice/jastucnica-damast-mint-50x70",
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
