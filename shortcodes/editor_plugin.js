(function() { 
    // Creates a new plugin class and a custom listbox
    tinymce.create('tinymce.plugins.onehalf', {
        createControl: function(n, cm) {
            switch (n) {
                case 'onehalf':
                    var mlb = cm.createListBox('onehalf', {
                        title : 'Shortcodes',
                        onselect : function(v) { 
                            var url = document.getElementById('hidden_url').value;
                            if(v=='gmaps') {
                                    
                                var tb = tb_show('', url + '/shortcodes/shortcodes_google_maps.php?TB_iframe=true')
                            }
                            if(v=='vimeo') {
                                var vimeo = prompt('Video', 'Enter video ID (eg. 46106724)');
                                window.parent.send_to_editor("[vimeo]" + vimeo + "[/vimeo]<br/>");   
                            }
                            if(v=='icon_group') {
                                window.parent.send_to_editor("[icon_group][/icon_group]");   
                            }
                            if(v=='breadcrumbs') {
                                window.parent.send_to_editor("[breadcrumbs /]");   
                            }
                            if(v=='youtube') {
                                var vimeo = prompt('Video', 'Enter video ID (eg. IG0wyXUcqZI)');
                                window.parent.send_to_editor("[youtube]" + vimeo + "[/youtube]<br/>");   
                            }
                            if(v=='button') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_button.php?TB_iframe=true');
                            }
                            if(v=='custom-button') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_custom_button.php?TB_iframe=true');
                            }
                            if(v=='contact_success') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_contact_success.php?TB_iframe=true');
                            }
                            if(v=='quote_blog') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_quote_blog.php?TB_iframe=true');
                            }
                            if(v=='icon') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_icon.php?TB_iframe=true'); 
                            }
                            if(v=='columns') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_columns.php?TB_iframe=true'); 
                            }
                            
                            if(v=='progress') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_progress.php?TB_iframe=true'); 
                            }
                            
                            if(v=='person') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_person.php?TB_iframe=true'); 
                            }
                            if(v=='mark') {
                                window.parent.send_to_editor('[mark style="primary"]Text[/mark]');
                            }
                    
                            if(v=='tooltip') {
                                window.parent.send_to_editor('[tooltip text="Tooltip text" position="top"]Text[/tooltip]');
                            }
                            if(v=='table') {
                                window.parent.send_to_editor('[table][table_row][table_cell heading="true"]Text[/table_cell][/table_row][/table]');
                            }
                            if(v=='popover') {
                                window.parent.send_to_editor('[popover name="popover-1" text="Link text" style="link"]Inner Text[/popover]');
                            }
                            if(v=='carousel') {
                                window.parent.send_to_editor('[carousel background="carousel_back.png" full_width="true"]<br/>[carousel_slide][/carousel_slide]<br/>[carousel_slide][/carousel_slide]<br/>[carousel_slide][/carousel_slide]<br/>[/carousel]');
                            }
                            if(v=='heading') {
                                window.parent.send_to_editor('[heading]Text[/heading]');
                            }
                            if(v=='posts') {
                                window.parent.send_to_editor('[posts columns="5" orderby="date" order="DESC"]5[/posts]');
                            }
                            if(v=='featured_posts') {
                                window.parent.send_to_editor('[featured_posts theme="dark" columns="5" orderby="date" order="DESC"]5[/featured_posts]');
                            }
                            if(v=='faq') {
                                window.parent.send_to_editor('[faq][faq_item question="Lorem ipsum dolor."]Lorem ipsum doloum eros vulputate placerat sed non enim. Pellentesque eget.[/faq_item][/faq]');
                            }
                  
                            if(v=='code') {
                                window.parent.send_to_editor('[code]HTML code[/code]');
                            }
                            if(v=='alert') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_alert.php?TB_iframe=true'); 
                            }
                            
                            if(v=='custom_buttom') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_custom_button.php?TB_iframe=true'); 
                            }
                            
                            if(v=='list') {
                                var tb = tb_show('', url + '/shortcodes/shortcodes_list.php?TB_iframe=true'); 
                            }
                            
                            if(v=='error_404') {
                                var tb = tb_show('', url + '/shortcodes/error_404.php?TB_iframe=true'); 
                            }
            
                            if(v=='blog') { var tb = tb_show('', url + '/shortcodes/blog.php?TB_iframe=true'); }
                            if(v=='box') { var tb = tb_show('', url + '/shortcodes/box.php?TB_iframe=true'); }
                            if(v=='color') { var tb = tb_show('', url + '/shortcodes/color.php?TB_iframe=true'); }
                            if(v=='team') { var tb = tb_show('', url + '/shortcodes/team.php?TB_iframe=true'); }
                            if(v=='logos') {
                                window.parent.send_to_editor('[logos][logo alt="Logo 1" href="#"]http://astudio.si/preview/move/images/testing_images/logo-1.png[/logo][logo alt="Logo 2" href="#"]http://astudio.si/preview/move/images/testing_images/logo-2.png[/logo][/logos]');
                            }

                            if(v=='statement') { var tb = tb_show('', url + '/shortcodes/shortcodes_statement.php?TB_iframe=true'); }


                        }
                    });
                    // Add some values to the list box

                    mlb.add('Blog', 'blog');
                    mlb.add('Box', 'box');
                    mlb.add('Button', 'button');
                    mlb.add('Color', 'color');
                    mlb.add('Contact form', 'contact_success');
                    mlb.add('Team', 'team');
                    mlb.add('Logos', 'logos');

                    mlb.add('Google maps', 'gmaps');  
                    mlb.add('Youtube video', 'youtube');
                    mlb.add('Breadcrumbs', 'breadcrumbs');     
                    mlb.add('Vimeo video', 'vimeo');   
                    //mlb.add('Custom Button', 'custom-button');  
                    mlb.add('Quote', 'quote_blog');
                    mlb.add('Icon', 'icon');
                    mlb.add('Icon group', 'icon_group');
                    mlb.add('Column layout', 'columns');
                    mlb.add('Progress bar', 'progress');
                    //mlb.add('Person', 'person');
                    //mlb.add('Mark', 'mark');
                    //mlb.add('Code', 'code');
                    //mlb.add('Table', 'table');
                    //mlb.add('Faq', 'faq');
                    mlb.add('Heading', 'heading');
                    //mlb.add('Popover', 'popover');
                    //mlb.add('Tooltip', 'tooltip');
                    //mlb.add('Carousel', 'carousel');
                    mlb.add('Statement', 'statement');
                    //mlb.add('Alert box', 'alert');
					//mlb.add('List', 'list');
                    //mlb.add('Posts', 'posts');
                    //mlb.add('Featured Posts', 'featured_posts');
					mlb.add('Error 404', 'error_404');
                // Return the new listbox instance
                return mlb;
            }
            return null;
        }
    });
    tinymce.PluginManager.add('onehalf', tinymce.plugins.onehalf);
})();
