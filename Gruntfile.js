module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'] 
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS', 
                            replacement: './styles/main.css'
                        }
                    ],
                    prefix:'@@'
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        }
                    ],
                    prefix:'@@'
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true, // Corrigido
                    collapseWhitespace: true, // Corrigido
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
            files: {
                'dist/scripts/main.min.js': 'src/scripts/main.js'
            }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');  
    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-replace');  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');  
    grunt.loadNpmTasks('grunt-contrib-clean');  
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Tarefa de desenvolvimento
    grunt.registerTask('dev', ['less:development', 'replace:dev', 'watch']);

    // Tarefa de produção
    grunt.registerTask('build', ['clean', 'less:production', 'htmlmin:dist', 'replace:dist', 'uglify']);
};
