module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Añade este plugin
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            // Esto le dice a Metro: "@" apunta a la raíz "./"
            // Ahora coincide con tu tsconfig.json
            '@': './',
          },
        },
      ],
      // Asegúrate de que expo-router/babel está aquí
      'expo-router/babel',
    ],
  };
};