export function Components(){
    var self = this;
    self.all_components = ["rectCollider", "script", "rigidbody"]

    this.rectColliderGenereal = function(obj){
        var obj = {
            x: obj.x,
            y: obj.y,
            width: obj.width,
            height: obj.height
        }
        return obj;
    }

    this.rectCollider = function(info){
        var obj = {
            width: info.width,
            height: info.height,
            x: info.x,
            y: info.y,
            collide: info.collide
        }    
        return obj;
    }
    
}