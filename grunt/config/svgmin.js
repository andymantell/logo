module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'src',
      src: ['*.svg'],
      dest: 'dist'
    }]
  }
}
