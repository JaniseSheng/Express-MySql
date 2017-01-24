/**
 * Created by cform on 17/1/10.
 */
const images={
    //增
    imageinsert:'INSERT INTO `images` (`id`,`url`,`fileName`,`originalName`,`text`) VALUES(0,?,?,?,?)',
    //删
    imagedelete: 'delete from images where id=?',
    //删所有
    imagedeleteall: 'delete from images where 1=1',
    //改
    imageupdate:'UPDATE `images` SET `text`=? WHERE `id`=?',
    //查所有
    imageAll: 'select * from images',
    //根据ID查找
    imageById: 'select * from images where id=?'
}

module.exports=images;