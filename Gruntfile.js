/**
 * Created by cristhianjbd on 25/10/16.
 */
module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        uglify: {
                files: {
                    'dist/js/scripts.min.js': ['app/js/controllers/*.js','app/js/services/*.js','app/js/*.js']
                }
        },
        concat: {
            options: {
                separator: '\n'
            },
            libs: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'dist/libs/app.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: false
                },
                files: {
                    'dist/scss/style.scss': 'app/css/style.css'
                }
            }
        }

    });

    grunt.registerTask('default', ['uglify','sass','concat']);
};